import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { getProductList, getTaxRate } from './actions';
import data from './api/aaa.json';

//console.log(data);
//  https://api.myjson.com/bins/nfycj

const middleware = [ thunk ];
const store = createStore(reducer,applyMiddleware(...middleware));
const {lang} = store.getState();

store.dispatch(getProductList(lang.current));
store.dispatch(getTaxRate());



ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
