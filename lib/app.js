const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Built in middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  require('cors')({
    origin: [
      'http://localhost:7891',
      'https://phenomenal-marzipan-f0cc79.netlify.app',
      'https://resourcery-resourcery.netlify.app',
    ],
    credentials: true,
    methods: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE'],
  })
);

// App routes
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/resources', require('./controllers/resources'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
