// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { InputBox } from '~/components/input';
import { ConfirmBox } from '~/components/confirm-box';
import { emailIsValid } from '~/utils/';

import { Container, Content, Title } from './styles';

type Props = {};

type State = {
    email: string,
    hasAttemptedSubmit: boolean,
    isValidEmail: boolean,
};

export class ForgottenPassword extends React.PureComponent<Props, State> {
    state = {
        email: '',
        hasAttemptedSubmit: false,
        isValidEmail: true,
    };

    onSubmit = () => {
        this.setState({ hasAttemptedSubmit: true });
    };

    onChangeEmail = (value: string) => {
        this.setState({ email: value, isValidEmail: emailIsValid(value) });
    };

    render() {
        const { email, hasAttemptedSubmit, isValidEmail } = this.state;
        const canAttemptSubmit = email.trim() !== '';

        return (
            <Screen title="Forgotten password">
                <Container>
                    <Content>
                        <Title>Enter your email and we'll send you a link with more instructions.</Title>
                        <InputBox
                            label="Email"
                            autoCompleteType="off"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            error="Please provide a valid e-mail"
                            hasError={hasAttemptedSubmit && !isValidEmail}
                            value={email}
                            onValueChange={this.onChangeEmail}
                        />
                    </Content>

                    <ConfirmBox text="Send email" isDisabled={!canAttemptSubmit} onPress={this.onSubmit} />
                </Container>
            </Screen>
        );
    }
}
