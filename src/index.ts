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
  console.log('schedule start');
  const rule = new schedule.RecurrenceRule();
  rule.hour = 17;
  rule.minute = 0;
  rule.tz = 'Asia/Seoul';
  schedule.scheduleJob(rule, app);
});
