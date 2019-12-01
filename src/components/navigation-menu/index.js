// @flow
import { connect } from 'react-redux';

import { toggleNavigation } from '~/domains/ui/actions';
import { getIsNavigationVisible } from '~/domains/ui/selectors';

import { NavigationMenuComponent } from './component';
import type { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: any): StateProps => ({
    isNavigationVisible: getIsNavigationVisible(state),
});

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
};

export const NavigationMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationMenuComponent);
