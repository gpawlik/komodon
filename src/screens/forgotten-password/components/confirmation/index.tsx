import * as React from 'react';
import { Keyboard } from 'react-native';

import { Screen } from '~/components/screen';
import { InputBox } from '~/components/input';
import { ConfirmBox } from '~/components/confirm-box';

import { Container, Content, Title, InputContainer, Link, LinkText } from '../../styles';

interface Props {
    email: string;
    isSubmitting: boolean;
    onSubmit: any;
    onResendCode: () => void;
}

export interface State {
    code: string;
    password: string;
    password2: string;
    hasAttemptedSubmit: boolean;
    isValidCode: boolean;
    isValidPassword: boolean;
    isMatchingPassword: boolean;
}

export class ForgottenPasswordConfirmation extends React.PureComponent<Props, State> {
    state = {
        code: '',
        password: '',
        password2: '',
        hasAttemptedSubmit: false,
        isValidCode: false,
        isValidPassword: false,
        isMatchingPassword: false,
    };

    onSubmit = () => {
        const { onSubmit } = this.props;
        const { isValidCode, isValidPassword, isMatchingPassword, code, password } = this.state;

        this.setState({ hasAttemptedSubmit: true });

        if (isValidCode && isValidPassword && isMatchingPassword) {
            onSubmit(code, password);
        }
    };

    onChangeCode = (value: string) => {
        this.setState({ code: value, isValidCode: !!value.trim().length });
    };

    onChangePassword1 = (value: string) => {
        this.setState({ password: value, isValidPassword: value.trim().length > 6 });
    };

    onChangePassword2 = (value: string) => {
        this.setState({ password2: value, isMatchingPassword: this.state.password === value });
    };

    render() {
        const { email, isSubmitting, onResendCode } = this.props;
        const {
            code,
            password,
            password2,
            isValidCode,
            hasAttemptedSubmit,
            isValidPassword,
            isMatchingPassword,
        } = this.state;
        const canAttemptSubmit = code.trim() !== '';
        const title = email ? `The code has just been sent to ${email}` : 'The code has just been sent to your email';

        return (
            <Screen title="Forgotten password confirmation">
                <Container>
                    <Content>
                        <Title>{title}</Title>
                        <Link onPress={onResendCode}>
                            <LinkText>Didn't get the code?</LinkText>
                            <LinkText isMarked>Re-send it</LinkText>
                        </Link>

                        <InputContainer>
                            <InputBox
                                label="Code"
                                autoCompleteType="off"
                                autoCapitalize="none"
                                error="Please provide a valid code"
                                hasError={hasAttemptedSubmit && !isValidCode}
                                value={code}
                                onValueChange={this.onChangeCode}
                            />

                            <InputBox
                                value={password}
                                label="Password"
                                secureTextEntry
                                hasError={hasAttemptedSubmit && !isValidPassword}
                                onValueChange={this.onChangePassword1}
                                blurOnSubmit={false}
                                onSubmitEditing={() => Keyboard.dismiss()}
                            />

                            <InputBox
                                value={password2}
                                label="Repeat Password"
                                error="Passwords do not match"
                                secureTextEntry
                                hasError={hasAttemptedSubmit && !isMatchingPassword}
                                onValueChange={this.onChangePassword2}
                                blurOnSubmit={false}
                                onSubmitEditing={() => Keyboard.dismiss()}
                            />
                        </InputContainer>
                    </Content>

                    <ConfirmBox
                        text="Confirm"
                        isSubmitting={isSubmitting}
                        isDisabled={!canAttemptSubmit}
                        onPress={this.onSubmit}
                    />
                </Container>
            </Screen>
        );
    }
}
