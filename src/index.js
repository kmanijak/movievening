import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './components/App';
import './styles/index.css';

const initializesStore = Store();

ReactDOM.render(
  <Provider store={initializesStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
