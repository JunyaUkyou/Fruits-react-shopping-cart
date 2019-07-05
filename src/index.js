import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { getProductList } from './actions';

const middleware = [ thunk ];
const store = createStore(reducer,applyMiddleware(...middleware));
const {lang} = store.getState();

store.dispatch(getProductList(lang.current));

store.subscribe(() => getProductList(lang.current))

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
