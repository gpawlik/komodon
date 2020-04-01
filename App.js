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
import { SubscriptionModal } from '~/screens/subscriptions/components/details';
import { SearchPlaceModal } from '~/screens/search-destination';
import { SearchDateModal } from '~/screens/search-date';
import { FiltersModal } from '~/screens/filters';

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
        SubscriptionModal: {
            screen: SubscriptionModal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

export default createAppContainer(RootStack);
