import { connect } from 'react-redux';

import { toggleNavigation } from '~/domains/ui/actions';
import { getIsNavigationVisible } from '~/domains/ui/selectors';
import { logout } from '~/domains/auth/actions';
import { getIsLoggedIn } from '~/domains/auth/selectors';
import { ReduxState } from '~/types';

import { NavigationMenuComponent } from './component';
import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: ReduxState): StateProps => ({
    isNavigationVisible: getIsNavigationVisible(state),
    isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
    logout,
};

export const NavigationMenu = connect(mapStateToProps, mapDispatchToProps)(NavigationMenuComponent);
