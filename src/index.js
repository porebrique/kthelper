import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'src/reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

const store = createStore(reducers);

const Main = () => (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
);

ReactDOM.render(Main(), document.getElementById('root'));
registerServiceWorker();
