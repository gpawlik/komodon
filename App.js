// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as routes from '~/constants/routes';

import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { SearchPlaceModal } from '~/components/search-destination';
import { SearchDateModal } from '~/components/search-date';
import { FiltersModal } from '~/components/filters';

const MainStack = createStackNavigator(
    {
        Home: { screen: FiltersModal },
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
        FiltersModal: {
            screen: FiltersModal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

const App = createAppContainer(RootStack);

export default App;
