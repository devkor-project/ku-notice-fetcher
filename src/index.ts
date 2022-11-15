import fetcherApp from '@/app/index';
import axios from 'axios';

const app = async () => {
  // TODO:: logger
  try {
    await fetcherApp();
  } catch (err) {
    console.log(err);
  }
};
app().then(() => {
  console.log('done');
}).catch((err) => {
  console.log(err);
});
