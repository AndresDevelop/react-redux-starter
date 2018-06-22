import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { itemReducer } from './reducers/items';

const allReducers = combineReducers({
  items: itemReducer
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk, logger)
);

export default store;