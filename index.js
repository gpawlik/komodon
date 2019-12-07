// @flow
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { store } from '~/store';
import { provider } from '~/provider';

const AppComponent = () => provider(App, store);

AppRegistry.registerComponent(appName, AppComponent);
