// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as routes from '~/constants/routes';

import { Home } from '~/screens/home';
import { About } from '~/screens/about';

const MainNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        [routes.about]: { screen: About },
    },
    { headerMode: 'none' }
);

const App = createAppContainer(MainNavigator);

export default App;
