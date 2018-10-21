import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import * as reducers from '../reducers';

export default function(history: History) {
  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(logger, routerMiddleware(history))
  );
}
