import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Add the job RegistrationMail in the queue
    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  },
};
