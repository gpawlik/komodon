import { connect } from 'react-redux';

import { sendForgottenPassword, sendNewCredentails } from '~/domains/auth/actions';

import { ForgottenPasswordComponent } from './component';
import { DispatchProps } from './types';

const mapDispatchToProps: DispatchProps = {
    sendForgottenPassword,
    sendNewCredentails,
};

export const ForgottenPassword = connect(null, mapDispatchToProps)(ForgottenPasswordComponent);
