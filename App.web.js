import * as React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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

const customHistory = createBrowserHistory();

const navigation = {
    navigate: (path, opt) => customHistory.push(path, opt),
    goBack: customHistory.goBack,
};

const getPath = route => `/${route}`;

const render = Component => ({ match }) => <Component navigation={navigation} params={match?.params} />;

const getRoute = (Component, route) => <Route path={getPath(route)} render={render(Component)} />;

const App = () => {
    return (
        <Router history={customHistory}>
            <Switch>
                {getRoute(About, routes.about)}
                {getRoute(Results, routes.results)}
                {getRoute(Login, routes.login)}
                {getRoute(ForgottenPassword, routes.forgottenPassword)}
                {getRoute(Subscriptions, routes.subscriptions)}
                {getRoute(SubscriptionModal, 'SubscriptionModal/:id')}
                {getRoute(SearchPlaceModal, 'SearchPlaceModal')}
                {getRoute(SearchDateModal, 'SearchDateModal')}
                {getRoute(FiltersModal, 'FiltersModal')}
                {getRoute(Home, '')}
            </Switch>
        </Router>
    );
};

export default App;
