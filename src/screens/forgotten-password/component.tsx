import * as React from 'react';

import { ForgottenPasswordSuccessPayload } from '~/domains/auth/types';

import { ForgottenPasswordMain } from './components/main';
import { ForgottenPasswordConfirmation } from './components/confirmation';
import { Props } from './types';

interface State {
    username: string;
    email: string;
    isCodeSent: boolean;
}

export class ForgottenPasswordComponent extends React.Component<Props, State> {
    state = {
        username: '',
        email: '',
        isCodeSent: false,
    };

    onMainSuccess = ({ username, email }: ForgottenPasswordSuccessPayload) => {
        this.setState({ isCodeSent: true, username, email });
    };

    handleMainSubmit = (username: string) => {
        this.props.sendForgottenPassword({ username, successCb: this.onMainSuccess });
    };

    handleConfirmationSubmit = (code: string, password: string) => {
        const { navigation } = this.props;
        const { username } = this.state;
        this.props.sendNewCredentails({ username, code, password, successCb: navigation.goBack });
    };

    render() {
        console.log({ p: this.props });
        const { isCodeSent, email } = this.state;

        return !isCodeSent ? (
            <ForgottenPasswordMain onSubmit={this.handleMainSubmit} />
        ) : (
            <ForgottenPasswordConfirmation email={email} onSubmit={this.handleConfirmationSubmit} />
        );
    }
}
