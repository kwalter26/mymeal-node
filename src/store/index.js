import C from '../constants';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default (initialStore = {}) => {
  return applyMiddleware(thunk)(createStore)(reducers, initialStore);
};
