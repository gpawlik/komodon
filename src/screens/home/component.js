// @flow
import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { NavigationMenu } from '~/components/navigation-menu';
import { Container, Content } from '~/components/screen/styles';

import type { Props } from './types';

type State = {};

export class HomeComponent extends React.PureComponent<Props, void> {
    onMenuPress = () => this.props.toggleNavigation({ isVisible: true });

    render() {
        console.log({ props: this.props });
        return (
            <Container testID="screen.home">
                <NavigationMenu navigate={this.props.navigation.navigate} />
                <Header
                    backIcon={generalIcons.MENU}
                    backAction={this.onMenuPress}
                    secondaryIcon={generalIcons.PIN}
                    secondaryAction={this.handleToggleView}
                    hasLogo
                />
                <Content isFullWidth></Content>
            </Container>
        );
    }
}
