import Queue from 'bull';
import redisConfig from '../../config/redis';
import Sentry from './Sentry';

import * as jobs from '../jobs';

const test = new Queue();

const queues = Object.values(jobs).map((job) => ({
  // bull: new Queue(job.key, redisConfig),
  bull: new Queue(job.key),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name);
    // queue.bull.clean();
    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data);
        console.log(err);
        Sentry.captureException(err);
      });
    });
  },
};

// import RegistrationMail from '../jobs/RegistrationMail';

// const mailQueue = new Queue(RegistrationMail.key, redisConfig);
// mailQueue.on('failed', (job, err) => {
//   console.log('Job failed', job.name, job.data);
//   console.log(err);
//   Sentry.captureException(err);
// });

// export default mailQueue;
