import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

import { store, persistor } from '~/store';
import { provider } from '~/provider';

const AppComponent = () => provider(App, store, persistor);

AppRegistry.registerComponent(appName, AppComponent);

AppRegistry.runApplication('Komodon', {
    initialProps: {},
    rootTag: document.getElementById('root'),
});
