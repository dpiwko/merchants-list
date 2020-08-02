import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'store/reducers/merchant'

const devToolsExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  /* preloadedState, */
  compose(applyMiddleware(thunk), devToolsExtension),
)

export default store
