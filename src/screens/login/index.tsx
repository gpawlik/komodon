import { connect } from 'react-redux';

import { loginAttempt, signupAttempt } from '~/domains/auth/actions';
import { getSubscriptions } from '~/domains/subscriptions/selectors';
import { ReduxState } from '~/types';

import { LoginComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    subscriptions: getSubscriptions(state),
});

const mapDispatchToProps: DispatchProps = {
    loginAttempt,
    signupAttempt,
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
