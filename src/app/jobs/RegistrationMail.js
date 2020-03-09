import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: 'Queue Test <queue@mhayk.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'User register',
      html: `Hi, ${user.name} ! Welcome Mhayk\'s queue system :D`,
    });
  },
};
