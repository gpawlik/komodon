// @flow
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as routes from '~/constants/routes';

import { Home } from '~/screens/home';
import { About } from '~/screens/about';
import { Results } from '~/screens/results';
import { Login } from '~/screens/login';
import { ForgottenPassword } from '~/screens/forgotten-password';
import { Subscriptions } from '~/screens/subscriptions';
import { SearchPlaceModal } from '~/components/search-destination';
import { SearchDateModal } from '~/components/search-date';
import { FiltersModal } from '~/components/filters';

const MainStack = createStackNavigator(
    {
        [routes.home]: { screen: Home },
        [routes.about]: { screen: About },
        [routes.results]: { screen: Results },
        [routes.login]: { screen: Login },
        [routes.forgottenPassword]: { screen: ForgottenPassword },
        [routes.subscriptions]: { screen: Subscriptions },
    },
    {
        initialRouteName: routes.home,
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
