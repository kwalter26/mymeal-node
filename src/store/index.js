import C from '../constants';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reduxSocket from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io('/')
const socketMiddleware = reduxSocket(socket,'send/');


export default (initialStore = {}) => {
  return applyMiddleware(socketMiddleware)(createStore)(reducers, initialStore);
};
