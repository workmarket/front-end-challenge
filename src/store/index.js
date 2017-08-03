import {
  createStore,
  applyMiddleware,
} from 'redux';
import reduxthunk from 'redux-thunk';
import {
  Iterable,
} from 'immutable';
import {
  createLogger,
} from 'redux-logger';
import reducer from '../reducers';

// set up logger
const stateTransformer = (state) => {
  // transform to JS for logging
  if (Iterable.isIterable(state)) {
    return state.toJS();
  }
  return state;
};

const logger = createLogger({
  stateTransformer,
});

// set up middleware
const middlewares = [reduxthunk, logger];

let debugEnhancer = f => f;
debugEnhancer = window.devToolsExtension ? window.devToolsExtension() : debugEnhancer;

const configureStore = () => {
  const store = createStore(
    reducer,
    debugEnhancer,
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    // enable webpack HMR for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
