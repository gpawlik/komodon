import { createStore, applyMiddleware, compose as reduxCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import immutableTransform from 'redux-persist-transform-immutable';

import { reducer as rootReducer } from './reducer';
import sagas from './sagas-registration';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [immutableTransform()],
    whitelist: ['search', 'destinations'],
    blacklist: ['results'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const debug = process.env['NO_DEBUG'] !== '1';
// See https://github.com/jhen0409/react-native-debugger/issues/29#issuecomment-262941722
const compose = (debug && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || reduxCompose;

const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
//persistor.purge();

// Should it be here??
sagaMiddleware.run(sagas);

export { store, persistor };
