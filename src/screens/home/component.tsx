import * as React from 'react';

import * as routes from '~/constants/routes';
import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { NavigationMenu } from '~/components/navigation-menu';
import { Container, Content } from '~/components/screen/styles';

import { Searchbox } from './components/searchbox';
import { Props } from './types';

export class HomeComponent extends React.PureComponent<Props, void> {
    onMenuPress = () => this.props.toggleNavigation({ isVisible: true });

    openProfile = () => {
        const { isLoggedIn, navigation } = this.props;
        const route = isLoggedIn ? routes.subscriptions : routes.login;
        navigation.navigate(route);
    };

    render() {
        return (
            <Container>
                <NavigationMenu navigate={this.props.navigation.navigate} />
                <Header
                    backIcon={generalIcons.MENU}
                    backAction={this.onMenuPress}
                    secondaryIcon={generalIcons.PROFILE}
                    secondaryAction={this.openProfile}
                />
                <Content isFullWidth>
                    <Searchbox navigate={this.props.navigation.navigate} />
                </Content>
            </Container>
        );
    }
}
