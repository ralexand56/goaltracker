import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Redux from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
// import { logger } from 'redux-logger';
import reducers, { ApplicationState } from './store';

const configureStore = (initialState?: ApplicationState) => {
  // Build middleware. These are functions that can process the actions before they reach the store.
  // const windowIfDefined = typeof window === 'undefined' ? null : window as {};
  // If devTools is installed, connect to it
  // const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer;
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(thunk, promiseMiddleware())
  // tslint:disable-next-line:no-any
  )(createStore as any);

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = reducers;
  const store = createStoreWithMiddleware(
    combineReducers({ ...allReducers }),
    initialState
  ) as Redux.Store<ApplicationState>;

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./store/index', () => {
      const nextReducers = reducers;
      // tslint:disable-next-line:no-any
      store.replaceReducer(nextReducers as any);
    });
  }

  return store;
};

// const buildRootReducer: ApplicationState = (allReducers: ApplicationState) =>
//   combineReducers({ ...allReducers });

export default configureStore;
