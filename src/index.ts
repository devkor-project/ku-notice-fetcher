import fetcherApp from '@/app/index';
import schedule from 'node-schedule';
import express from 'express';

const app = async () => {
  // TODO:: logger
  try {
    await fetcherApp();
    console.log('done');
  } catch (err) {
    console.log(err);
  }
};

const expressApp = express();
expressApp.get('/', (req, res) => {
  res.send('crawler is avaliable');
});
expressApp.listen(3000, () => {
  const rule = new schedule.RecurrenceRule();
  rule.hour = 8;
  rule.minute = 0;
  schedule.scheduleJob(rule, app);
});
