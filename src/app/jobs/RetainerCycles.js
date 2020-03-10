export default {
  key: 'RetainerCycles',
  options: {
    repeat: {
      // every: 2000,
      cron: '32 16 * * *',
    },
  },
  async handle({ data }) {
    console.log('Retainer executing ... ', new Date(), data);
  },
};
