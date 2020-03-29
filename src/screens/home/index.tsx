import { connect } from 'react-redux';

import { toggleNavigation } from '~/domains/ui/actions';
import { getIsLoggedIn, getUsername } from '~/domains/auth/selectors';
import { setAlert } from '~/domains/alerts/actions';

import { HomeComponent } from './component';
import { StateProps, DispatchProps } from './types';

const mapStateToProps = (state: any): StateProps => ({
    isLoggedIn: getIsLoggedIn(state),
    username: getUsername(state),
});

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
    setAlert,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
