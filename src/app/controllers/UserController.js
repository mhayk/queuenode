import Mail from '../lib/Mail';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Send an email
    await Mail.sendMail({
      from: 'Queue Test <queue@mhayk.com>',
      to: `${name} <${email}>`,
      subject: 'User register',
      html: 'Hi! Welcome Mhayk\'s queue system :D',
    });

    return res.json(user);
  },
};
