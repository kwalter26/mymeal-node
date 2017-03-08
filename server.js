import express from 'express';
import path from 'path';
import cors from 'cors';
import jwt from 'express-jwt';

import config from './config';

const server = express();
const authCheck = jwt({
  secret: new Buffer(process.env.AUTHSECRET, 'base64'),
  audience: process.env.AUTHCLIENT
});

server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(config.express.port, config.express.host, () => {
  console.log(`Mymeal server listening on ${config.expressUrl}`);
});
