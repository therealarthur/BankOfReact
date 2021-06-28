import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';

// Construct our Redux store;
const logger = createLogger({ collapsed: true });
const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(allReducers, middleware)
// store.subscribe((()=>console.log(store.getState())))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

