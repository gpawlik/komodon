// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as routes from '~/constants/routes';

import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { Results } from '~/screens/results';
import { Subscriptions } from '~/screens/subscriptions';
import { SearchPlaceModal } from '~/components/search-destination';
import { SearchDateModal } from '~/components/search-date';
import { FiltersModal } from '~/components/filters';

const MainStack = createStackNavigator(
    {
        Home: { screen: Home },
        [routes.about]: { screen: About },
        Results: { screen: Results },
        Subscriptions: { screen: Subscriptions },
    },
    {
        initialRouteName: 'Results',
        headerMode: 'none',
    },
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
    },
);

export default createAppContainer(RootStack);
