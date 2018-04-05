/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from '../redux';

let middleware = [promise, thunk];

if (__DEV__) {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
	middleware = [...middleware];
}

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer)

export default store;
