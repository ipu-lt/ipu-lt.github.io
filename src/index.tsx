// import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import * as reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers(reducers), applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
