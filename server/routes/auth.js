const routes = require('express').Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken')


routes.post('/login', async (req, res) => {
  const userResult = await user.findOne({ email: req.body.email }).exec();
  if (!userResult) { res.send({ msg: 'User not found', data: '' }); }
  if (!userResult.comparePassword(req.body.password, userResult.password)) { res.send({ msg: 'Bad password', data: '' }); }
  userResult.password = '';
  res.send({ msg: 'OK', data: { token: jwt.sign({ data: userResult }, 'SuperSecret') } });
})

routes.post('/register', async (req, res) => {
  const userResult = await user.create(req.body).catch(err => err);
  res.send({ msg: 'user Creation', data: userResult })
})

module.exports = routes;
