const { Router } = require('express');
const FruitTree = require('../models/FruitTree');
const authenticate = require('../middleware/authenticate');

module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const { id } = req.user;

    const resource = await FruitTree.insert(req.body, id);

    res.send(resource);
  } catch (error) {
    next(error);
  }
});
