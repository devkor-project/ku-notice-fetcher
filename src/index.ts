import app from '@/app/app';
import urls from './consts/urls';

app(urls)
  .then()
  .catch((err) => console.error(err));
