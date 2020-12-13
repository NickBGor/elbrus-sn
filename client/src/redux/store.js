import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSaga();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(rootSaga);
