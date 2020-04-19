// @flow
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator initialRouteName={routes.home} headerMode="none">
            <MainStack.Screen name={routes.home} component={Home} />
            <MainStack.Screen name={routes.about} component={About} />
            <MainStack.Screen name={routes.results} component={Results} />
            <MainStack.Screen name={routes.login} component={Login} />
            <MainStack.Screen name={routes.forgottenPassword} component={ForgottenPassword} />
            <MainStack.Screen name={routes.subscriptions} component={Subscriptions} />
        </MainStack.Navigator>
    );
}

function RootStackScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
                <RootStack.Screen name="SearchPlaceModal" component={SearchPlaceModal} />
                <RootStack.Screen name="SearchDateModal" component={SearchDateModal} />
                <RootStack.Screen name="FiltersModal" component={FiltersModal} />
                <RootStack.Screen name="SubscriptionModal" component={SubscriptionModal} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
