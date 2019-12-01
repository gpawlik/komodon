// @flow
import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducer';
import sagas from './sagas-registration';

const sagaMiddleware = createSagaMiddleware();

const debug = process.env['NO_DEBUG'] !== '1';
// See https://github.com/jhen0409/react-native-debugger/issues/29#issuecomment-262941722
const compose = (debug && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || reduxCompose;

export const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);
