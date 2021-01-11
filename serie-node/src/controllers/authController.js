const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.send(400).send({ error: 'User already exists' });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });

  } catch (error) {
    return res.status(400).send({ error: 'Registration fails' });
  }
});

module.exports = app => app.use('/auth', router);
