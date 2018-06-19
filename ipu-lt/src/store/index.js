import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import eventsReducer from '../reducers/events';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({ events: eventsReducer, router: routerReducer }),
    applyMiddleware(routerMiddleware(history), thunkMiddleware)
  );
}
