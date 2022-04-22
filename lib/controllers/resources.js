const { Router } = require('express');
const Resource = require('../models/Resource');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .post('/', authenticate, async (req, res, next) => {
    try {
      const { id } = req.user;
      const resource = await Resource.insert(req.body, id);
      res.send(resource);
    } catch (error) {
      next(error);
    }
  })

  .get('/', authenticate, async (req, res, next) => {
    try {
      const resources = await Resource.findAll();
      res.send(resources);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', authenticate, async (req, res, next) => {
    try {
      const resources = await Resource.findById(req.params.id);
      res.send(resources);
    } catch (error) {
      next(error);
    }
  })

  .get('/users/:id', authenticate, async (req, res, next) => {
    try {
      const resources = await Resource.findByUserId(req.params.id);
      res.send(resources);
    } catch (error) {
      next(error);
    }
  })

  .delete('/:id', authenticate, async (req, res, next) => {
    try {
      const resources = await Resource.deleteById(req.params.id);
      res.send(resources);
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
      const updatedResource = await Resource.updateById(
        req.params.id,
        req.body
      );
      res.send(updatedResource);
    } catch (error) {
      next(error);
    }
  })

  .get('/type/:type', async (req, res, next) => {
    try {
      const resources = await Resource.findByType(req.params.type);
      res.send(resources);
    } catch (error) {
      next(error);
    }
  });
