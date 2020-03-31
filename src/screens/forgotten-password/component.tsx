import * as React from 'react';

import { ForgottenPasswordSuccessPayload } from '~/domains/auth/types';

import { ForgottenPasswordMain } from './components/main';
import { ForgottenPasswordConfirmation } from './components/confirmation';
import { Props } from './types';

interface State {
    username: string;
    email: string;
    isCodeSent: boolean;
    isSubmitting: boolean;
}

export class ForgottenPasswordComponent extends React.Component<Props, State> {
    state = {
        username: '',
        email: '',
        isCodeSent: false,
        isSubmitting: false,
    };

    onMainSuccess = ({ username, email }: ForgottenPasswordSuccessPayload) => {
        this.setState({ isCodeSent: true, username, email, isSubmitting: false });
    };

    onConfirmationSuccess = () => {
        const { navigation } = this.props;

        this.setState({ isSubmitting: false }, navigation.goBack);
    };

    onFailure = () => {
        this.setState({ isSubmitting: false });
    };

    handleMainSubmit = (username: string) => {
        this.setState({ isSubmitting: true });
        this.props.sendForgottenPassword({ username, successCb: this.onMainSuccess, failureCb: this.onFailure });
    };

    handleConfirmationSubmit = (code: string, password: string) => {
        const { username } = this.state;

        this.setState({ isSubmitting: true });
        this.props.sendNewCredentails({
            username,
            code,
            password,
            successCb: this.onConfirmationSuccess,
            failureCb: this.onFailure,
        });
    };

    render() {
        const { isCodeSent, email, isSubmitting } = this.state;

        return !isCodeSent ? (
            <ForgottenPasswordMain isSubmitting={isSubmitting} onSubmit={this.handleMainSubmit} />
        ) : (
            <ForgottenPasswordConfirmation
                email={email}
                isSubmitting={isSubmitting}
                onSubmit={this.handleConfirmationSubmit}
            />
        );
    }
}
