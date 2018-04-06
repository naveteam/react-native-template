import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import rootReducer from '../redux'

const store = applyMiddleware(thunk, promise)(createStore)(rootReducer)

export default store
