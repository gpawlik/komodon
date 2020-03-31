import * as React from 'react';

import { Drawer } from '~/components/drawer';

import { menuItems, MENU_WIDTH } from './constants';
import { MenuItem } from './components/item';
import { Props } from './types';

export class NavigationMenuComponent extends React.Component<Props> {
    onHide = () => this.props.toggleNavigation({ isVisible: false });

    onPress = (route: string) => {
        this.props.navigate(route);
        this.onHide();
    };

    onLogout = () => {
        this.props.logout();
        this.onHide();
    };

    render() {
        const { isNavigationVisible, isLoggedIn } = this.props;

        return (
            <Drawer width={MENU_WIDTH} isVisible={isNavigationVisible} onHide={this.onHide}>
                {menuItems.map(({ id, message, route }) => (
                    <MenuItem key={id} message={message} route={route} onPress={this.onPress} />
                ))}
                {isLoggedIn ? <MenuItem key="logout" message="Logout" onPress={this.onLogout} /> : null}
            </Drawer>
        );
    }
}
