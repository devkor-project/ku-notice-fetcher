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
  const title = DomUtils.innerText(anchor);

  const innerText = DomUtils.innerText(element)
    .replaceAll('\t', '')
    .replaceAll('\n', '')
    .replaceAll('  ', '');
  const date = innerText.match(dateRegex)[0];

  const substr = innerText.replace('title', '');

  const author = substr.match(/[가-힣]+/)[0];

  return {
    page: {
      host: 'tbd',
      url: link,
    },
    writtenDate: date,
    title,
    content: 'tbd',
    writter: author,
  };
};

const parseRows = (html: string) => {
  const dom = parseDocument(html);
  const elements = DomUtils.getElements({
    tag_name: (type) => (type === 'tr' || type === 'li'),
  }, dom, true);
  const result: dto[] = [];
  const elementCallback = (element: AnyNode) => {
    if (isNotice(element)) {
      const info = getNoticeInfo(element);
      result.push(info);
    }
  };
  elements.forEach(elementCallback);
  return result;
};

const getContent = async (link: url): Promise<string> => {
  const html = await fetch(link);

  let startidx = html.search('<article>');
  let endidx = -1;
  if (startidx === -1) {
    startidx = html.search('<table>');
    endidx = html.search('</table>') + '</table>'.length;
  } else {
    endidx = html.search('</article>') + '</article>'.length;
  }
  const article = html.substring(startidx, endidx);
  return article;
};

const app = async (pages: page[]): Promise<dto[]> => {
  const dtos: dto[] = [];
  for (const pageInfo of pages) {
    const html = await fetch(pageInfo.url);
    const result = parseRows(html);
    const urlAugmentetResult = result.map((element) => ({
      page: {
        host: pageInfo.host,
        url: pageInfo.url.concat(element.page.url),
      },
      writtenDate: element.writtenDate,
      title: element.title,
      content: element.content,
      writter: element.writter,
    }));
    const contentAugmentedResult = await Promise.all(urlAugmentetResult.map(async (element) => ({
      page: {
        host: pageInfo.host,
        url: pageInfo.url.concat(element.page.url),
      },
      writtenDate: element.writtenDate,
      title: element.title,
      content: await getContent(element.page.url),
      writter: element.writter,
    })));
    dtos.push(...contentAugmentedResult);
  }

  return dtos;
};

const test = async () => {

};

export default test;
