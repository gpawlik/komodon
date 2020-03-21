import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { Searchbox } from '~/components/searchbox';
import { NavigationMenu } from '~/components/navigation-menu';
import { Container, Content } from '~/components/screen/styles';

import { Props } from './types';

export class HomeComponent extends React.PureComponent<Props, void> {
    onMenuPress = () => this.props.toggleNavigation({ isVisible: true });

    openLogin = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <Container>
                <NavigationMenu navigate={this.props.navigation.navigate} />
                <Header
                    backIcon={generalIcons.MENU}
                    backAction={this.onMenuPress}
                    secondaryIcon={generalIcons.PROFILE}
                    secondaryAction={this.openLogin}
                />
                <Content isFullWidth>
                    <Searchbox navigate={this.props.navigation.navigate} />
                </Content>
            </Container>
        );
    }
}
