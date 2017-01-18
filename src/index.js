import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import todoApp from './reducers.js';
import { createStore } from 'redux';

import './style/index.css';

const store = createStore(todoApp, {});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
