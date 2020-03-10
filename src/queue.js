import 'dotenv/config';

import Queue from './app/lib/Queue';


Queue.process();


/* This ensures that we will not have repeated scheduled activities */
const repeatables = Queue.queues.filter((item) => item.name === 'RetainerCycles');

if (repeatables) {
  repeatables.forEach(async (item) => {
    const jobs = await item.bull.getDelayed();
    jobs.forEach((job) => job.remove());
    Queue.add('RetainerCycles', { name: 'Mhayk' });
  });
}
