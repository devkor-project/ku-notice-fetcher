import noticeFetcher from '@/app/fetcher';
import store from '@/app/store';
import urls from '@/consts/urls';

const app = async () => {
  const data = await noticeFetcher(urls);
  console.log('fetch complete!');
  await store(data);
  console.log('store complete!');
};

export default app;
