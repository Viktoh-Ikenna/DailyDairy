import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const Mybaba = (state = { num: 'hi' }, action) => {
  switch (action.type) {
    case ' position':
      return { num:action.payload };
    case 'server':
      return {num:action.payload }
    default: return state;
  }
}


const store = createStore(combineReducers({ name: Mybaba }),{},applyMiddleware(thunk));
store.subscribe(() => {
  console.log('hii', store.getState())
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
