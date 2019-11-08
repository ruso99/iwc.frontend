import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import addStore from './Store/addStore';
import { Provider } from 'mobx-react';

const addPictureStore = new addStore();
console.log(addPictureStore);

ReactDOM.render(
  <Provider addStore={addPictureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
