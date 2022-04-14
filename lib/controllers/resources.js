const { Router } = require('express');
const Resource = require('../models/Resource');
const authenticate = require('../middleware/authenticate');

module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const { id } = req.user;

    const resource = await Resource.insert(req.body, id);

    res.send(resource);
  } catch (error) {
    next(error);
  }
});
