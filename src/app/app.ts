import { page } from '@/interfaces/urls';
import { parseDocument, DomUtils } from 'htmlparser2';
import axios from 'axios';

const app = async (urls: page[]) => {
  for (const url of urls) {
    const response = await axios.get(url.urls[0]);
    const string = response.data as string;

    const html = string
      .replaceAll('\t', '')
      .replaceAll('\n', '')
      .replaceAll('  ', '');
    const dom = parseDocument(html as string);
    const result = DomUtils.getElements({
      tag_name: 'tr',
      tag_contains: 'top-notice-bg ',
    }, dom, true);
    const children = DomUtils.getChildren(result[1]);
    const today = new Date().toISOString().substring(0, 10).replaceAll('-', '.');
    const posted = DomUtils.innerText(children[4]);
    // if(today===posted)
    const contentURL = DomUtils.getChildren(children[1]);

    const nextURL = `${url.urls[0]}${DomUtils.getElementsByTagName('a', contentURL[0])[0].attribs.href}`;
    const newContent = await axios.get(nextURL);
    const newHtml = newContent.data as string;
    const replacedHtml = newHtml.replaceAll('\t', '')
      .replaceAll('\n', '');
    const contentDom = parseDocument(replacedHtml as string);
    const titleNode = DomUtils.getElements({
      tag_name: 'th',
    }, contentDom, true);
    const titleElement = DomUtils.getChildren(titleNode[0].next.next);
    const title = DomUtils.innerText(titleElement);
    console.log(title);

    const contentParent = DomUtils.getElements({
      tag_name: 'div',
    }, contentDom, true);
    const spans = DomUtils.getElementsByTagName('span', contentParent[14], true);
    console.log(DomUtils.textContent(spans));

    console.log(DomUtils.textContent(DomUtils.getChildren(DomUtils.getElements({
      tag_name: 'td',
    }, contentDom, true)[2])[1]));
    console.log(`${url.urls[0]}${DomUtils.getElementsByTagName('a', DomUtils.getChildren(DomUtils.getElements({
      tag_name: 'td',
    }, contentDom, true)[2])[1])[0].attribs.href}`);
    DomUtils.getElementsByTagName('a', contentDom, true);
  }
};

export default app;
