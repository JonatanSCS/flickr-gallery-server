'use strict';
const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');

require('dotenv').config()
const PORT = process.env.PORT || 8080

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

app.listen(PORT, console.log(`Koa server listening on port ${PORT}`))

app.on('error', err => console.error(err));