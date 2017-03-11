import C from './constants';
import React from 'react';
import { render } from 'react-dom';
import storeFactory from './store';
import sampleData from './initialState.json';
import { Provider } from 'react-redux';
import routes from './router'

const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  sampleData;

const saveState = () => localStorage['redux-store'] = JSON.stringify(store.getState());

const store = storeFactory(initialState);
store.subscribe(saveState);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
