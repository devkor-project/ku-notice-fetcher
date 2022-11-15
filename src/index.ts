import fetcherApp from '@/app/index';
import schedule from 'node-schedule';

const app = async () => {
  // TODO:: logger
  try {
    await fetcherApp();
    console.log('done');
  } catch (err) {
    console.log(err);
  }
};

const rule = new schedule.RecurrenceRule();
rule.hour = 9;
rule.minute = 0;
schedule.scheduleJob(rule, app);
