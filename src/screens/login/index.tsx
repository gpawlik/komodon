import { connect } from 'react-redux';

import { getSubscriptions } from '~/domains/subscriptions/selectors';
import { ReduxState } from '~/types';

import { LoginComponent } from './component';
import { StateProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    subscriptions: getSubscriptions(state),
});

export const Login = connect(mapStateToProps, null)(LoginComponent);
