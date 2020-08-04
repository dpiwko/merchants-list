import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import merchant from 'store/reducers/merchant'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  merchant,
  /* preloadedState, */
  compose(applyMiddleware(thunk), devToolsExtension)
)

export default store
