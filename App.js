// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as routes from '~/constants/routes';

import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { SearchPlaceModal } from '~/components/search-destination';
import { SearchDateModal } from '~/components/search-date';

const MainStack = createStackNavigator(
    {
        Home: { screen: Home },
        [routes.about]: { screen: About },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        SearchPlaceModal: {
            screen: SearchPlaceModal,
        },
        SearchDateModal: {
            screen: SearchDateModal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const App = createAppContainer(RootStack);

export default App;
