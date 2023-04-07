import noticeFetcher from '@/app/fetcher';
import store from '@/app/store';
import urls from '@/consts/urls';

const app = async () => {
  const today = new Date().toISOString().substring(0, 10);
  console.log(`app: ${today}`);
  await Promise.all(urls.map(async (url) => {
    const data = await noticeFetcher(url);
    console.log(`${url.provider} : ${url.categoryId} - fetch complete!`);
    await Promise.all(data.map(async (d) => {
      await store(d);
    }));

    console.log('store complete!');
  }));
};

export default app;
