import { AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';

import App from './App';
import { name as appName } from './app.json';

import { store, persistor } from '~/store';
import { provider } from '~/provider';

Amplify.configure({
    Auth: {
        identityPoolId: '',
        region: '',
        userPoolId: '',
        userPoolWebClientId: '',
    },
});

const AppComponent = () => provider(App, store, persistor);

AppRegistry.registerComponent(appName, AppComponent);

console.disableYellowBox = true;
