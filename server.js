import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import path from 'path';
import cors from 'cors';
import jwt from 'express-jwt';
import mongoose from 'mongoose';



import C from './src/constants';

import config from './config';

const app = express();

const authCheck = jwt({
  secret: new Buffer(process.env.AUTHSECRET, 'base64'),
  audience: process.env.AUTHCLIENT
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

let server = app.listen(config.express.port, config.express.host, () => {
  console.log(`Mymeal server listening on ${config.expressUrl}`);
});

const io = socketIO(server);
io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`);
  socket.emit('action', {
    type: C.RECEIVE_INGREDIENTS,
    payload: initialState.allIngredients
  });
  socket.on('action', action => {
    console.log(action.type);
    switch (action.type) {
      case C.ADD_INGREDIENT:
        console.log('broadcast ingredient');
        initialState.allIngredients.push(action.payload);

        socket.broadcast.emit('action', {
          type: C.RECEIVE_INGREDIENTS,
          payload: initialState.allIngredients
        });

        break;
    }
  });
});

let initialState = {
  'allIngredients': [
    {
      'name': 'Potato',
      'background': 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg'
    },
    {
      'name': 'Tomato',
      'background': 'http://www.foodpoisonjournal.com/files/2015/09/Flash-lit_macro_Tomatoes.jpg'
    }
  ],
  'ingredientSelected': 0
};
