const { Router } = require('express');
const UserService = require('../services/UserService');
const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
const authenticate = require('../middleware/authenticate');
const IS_DEPLOYED = process.env.NODE_ENV === 'production';

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await UserService.insert(req.body);
      res.send(user);
    } catch (error) {
      next(error);
    }
  })
  .post('/session', async (req, res, next) => {
    try {
      const user = await UserService.signIn(req.body);
      res
        .cookie(process.env.COOKIE_NAME, user.authToken(), {
          httpOnly: true,
          maxAge: ONE_DAY_IN_MS,
          secure: IS_DEPLOYED,
          sameSite: IS_DEPLOYED ? 'none' : 'strict',
        })
        .send({ message: 'You are signed in!', user });
    } catch (error) {
      next(error);
    }
  })
  .delete('/session', async (req, res, next) => {
    try {
      res
        .clearCookie(process.env.COOKIE_NAME)
        .send({ message: 'You are signed out.' });
    } catch (error) {
      next(error);
    }
  })

  .get('/current', authenticate, (req, res) => {
    res.send(req.user);
  });
