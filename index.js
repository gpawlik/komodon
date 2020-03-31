import { AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';
import { IDENTITY_POOL_ID, REGION, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID } from 'react-native-dotenv';

import App from './App';
import { name as appName } from './app.json';

import { store, persistor } from '~/store';
import { provider } from '~/provider';

Amplify.configure({
    Auth: {
        identityPoolId: IDENTITY_POOL_ID,
        region: REGION,
        userPoolId: USER_POOL_ID,
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,
    },
});

const AppComponent = () => provider(App, store, persistor);

AppRegistry.registerComponent(appName, AppComponent);

console.disableYellowBox = true;
