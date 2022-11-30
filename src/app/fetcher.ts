import { page, url } from '@/interfaces/urls';
import { dto } from '@/interfaces/dto';
import { AnyNode } from 'domhandler';

import { parseDocument, DomUtils } from 'htmlparser2';
import axios from 'axios';

const dateRegex = /\d{4}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])/;

const fetch = async (link: string) => {
  const response = await axios.get(link);
  const html = response.data as string;
  return html;
};

const isNotice = (element: AnyNode) => {
  const txt = DomUtils.textContent(element);
  return dateRegex.test(txt);
};

const getNoticeInfo = (element: AnyNode): dto => {
  const anchor = DomUtils.getElementsByTagName('a', element)[0];
  const link = anchor.attribs.href;
  const title = DomUtils.innerText(anchor).trim();

  const innerText = DomUtils.innerText(element)
    .replaceAll('\t', '')
    .replaceAll('\n', '')
    .replaceAll('  ', '');
  const date = innerText.match(dateRegex)[0].replaceAll('.', '-');
  const today = new Date().toISOString().substring(0, 10);
  if (date !== today) {
    return null;
    // throw new Error('not today');
  }
  const substr = innerText.replace(title, '');

  const author = substr.match(/[가-힣]+/)[0];

  return {
    page: {
      provider: 'tbd',
      categoryId: -1,
      url: link,
    },
    writtenDate: date,
    title,
    content: 'tbd',
    writer: author,
  };
};

const parseRows = (html: string) => {
  const dom = parseDocument(html);
  const elements = DomUtils.getElements({
    tag_name: (type) => (type === 'tr' || type === 'li'),
  }, dom, true);
  const result: dto[] = [];
  const articleNos = [];
  const elementCallback = (element: AnyNode) => {
    if (isNotice(element)) {
      const info = getNoticeInfo(element);
      if (info === null) return;
      const articleNoStarts = info.page.url.indexOf('articleNo=') + 'articleNo='.length;
      const articleNoEnds = info.page.url.indexOf('&', articleNoStarts);
      const articleNo = info.page.url.substring(articleNoStarts, articleNoEnds);
      if (articleNos.includes(articleNo)) return;
      articleNos.push(articleNo);
      result.push(info);
    }
  };
  elements.forEach(elementCallback);
  return result;
};

const getLink = (anchor: url, infoLink: url): string => {
  if (anchor.startsWith('http')) return anchor;
  return infoLink.concat(anchor);
};

const getContent = async (link: url): Promise<string> => {
  const html = await fetch(link);
  let startidx = html.lastIndexOf('<article');
  let endidx = -1;
  if (startidx === -1) {
    startidx = html.lastIndexOf('<table');
    endidx = html.lastIndexOf('</table>') + '</table>'.length;
  } else {
    endidx = html.lastIndexOf('</article>') + '</article>'.length;
  }
  const article = html.substring(startidx, endidx);

  const imgStart = article.indexOf('<img src="');

  if (imgStart !== -1) {
    const imgEnd = article.substring(imgStart + 10).indexOf('"');
    const imgSrc = article.substring(imgStart + 10, imgStart + 10 + imgEnd);
    const domain = link.substring(0, link.replace('//', '11').indexOf('/'));
    const src = getLink(imgSrc, domain);
    return article.replace(imgSrc, src);
  }
  return article;
};

const noticeFetcher = async (pages: page[]): Promise<dto[]> => {
  const dtos: dto[] = [];
  for (const pageInfo of pages) {
    const html = await fetch(pageInfo.url);
    const result = parseRows(html);

    const contentAugmentedResult = await Promise.all(result.map(async (element) => ({
      page: {
        provider: pageInfo.provider,
        categoryId: pageInfo.categoryId,
        url: getLink(element.page.url, pageInfo.url),
      },
      writtenDate: element.writtenDate,
      title: element.title,
      content: await getContent(getLink(element.page.url, pageInfo.url)),
      writer: element.writer,
    })));
    dtos.push(...contentAugmentedResult);
  }

  return dtos;
};

export default noticeFetcher;
