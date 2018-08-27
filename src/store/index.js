import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = preloadState =>
  createStore(
    reducer,
    preloadState,
    composeEnchancers(applyMiddleware(thunkMiddleware))
  )

export default configureStore
