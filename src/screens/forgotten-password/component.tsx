import * as React from 'react';

import { ForgottenPasswordMain } from './components/main';
import { ForgottenPasswordConfirmation } from './components/confirmation';
import { Props } from './types';

interface State {
    username: string;
    isCodeSent: boolean;
}

export class ForgottenPasswordComponent extends React.Component<Props, State> {
    state = {
        username: '',
        isCodeSent: false,
    };

    onMainSuccess = (username: string) => {
        this.setState({ isCodeSent: true, username });
    };

    handleMainSubmit = (username: string) => {
        this.props.sendForgottenPassword({ username, successCb: this.onMainSuccess });
    };

    handleConfirmationSubmit = (code: string, password: string) => {
        const { username } = this.state;
        this.props.sendNewCredentails({ username, code, password });
    };

    render() {
        const { isCodeSent } = this.state;

        return !isCodeSent ? (
            <ForgottenPasswordMain onSubmit={this.handleMainSubmit} />
        ) : (
            <ForgottenPasswordConfirmation onSubmit={this.handleConfirmationSubmit} />
        );
    }
}
