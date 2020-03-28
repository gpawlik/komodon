import * as React from 'react';

import { InputBox } from '~/components/input';
import { Button } from '~/components/button';
import { LoginPayload, SignupPayload } from '~/domains/auth/types';

import { emailIsValid } from '~/utils/';

import { Section, InputsContainer, Link, LinkText } from './styles';

interface Props {
    isRegister?: boolean;
    onForgot?: () => void;
    changeTab: () => void;
    onLogin?: (arg0: LoginPayload) => void;
    onRegister?: (arg0: SignupPayload) => void;
    goBack: () => void;
}

interface State {
    isValidUsername: boolean;
    isValidEmail: boolean;
    isValidPassword: boolean;
    isMatchingPassword: boolean;
    hasAttemptedSubmit: boolean;
    username: string;
    email: string;
    password: string;
    password2: string;
}

export class StandardLogin extends React.PureComponent<Props, State> {
    state = {
        isValidUsername: true,
        isValidEmail: true,
        isValidPassword: true,
        isMatchingPassword: true,
        hasAttemptedSubmit: false,
        username: '',
        email: '',
        password: '',
        password2: '',
    };

    onSubmitLogin = () => {
        const { onLogin, goBack } = this.props;
        const { isValidUsername, isValidPassword, username, password } = this.state;

        this.setState({ hasAttemptedSubmit: true });

        if (isValidUsername && isValidPassword) {
            onLogin({ username, password, successCb: goBack });
        }
    };

    onSubmitRegister = () => {
        const { onRegister, goBack } = this.props;
        const {
            isValidUsername,
            isValidEmail,
            isValidPassword,
            isMatchingPassword,
            username,
            email,
            password,
        } = this.state;
        this.setState({ hasAttemptedSubmit: true });

        if (isValidUsername && isValidEmail && isValidPassword && isMatchingPassword) {
            onRegister({ username, email, password, successCb: goBack });
        }
    };

    onChangeUsername = value => {
        this.setState({ username: value, isValidUsername: !!value.length });
    };

    onChangeEmail = value => {
        this.setState({ email: value, isValidEmail: emailIsValid(value) });
    };

    onChangePassword1 = value => {
        this.setState({
            password: value,
            isValidPassword: value.length >= 6,
        });
    };

    onChangePassword2 = value => {
        this.setState({ password2: value, isMatchingPassword: this.state.password === value });
    };

    render() {
        const { isRegister, onForgot, changeTab } = this.props;
        const {
            username,
            email,
            password,
            password2,
            isValidUsername,
            isValidEmail,
            isValidPassword,
            isMatchingPassword,
            hasAttemptedSubmit,
        } = this.state;
        const buttonText = isRegister ? 'Sign Up' : 'Sign In';
        const linkTextA = isRegister ? 'Already have an account?' : "Don't have an account?";
        const linkTextB = isRegister ? 'Log in!' : 'Sign Up Now!';
        const submitFn = isRegister ? this.onSubmitRegister : this.onSubmitLogin;

        const canAttemptLogin = username.trim() !== '' && password.trim() !== '';
        return (
            <Section>
                <InputsContainer>
                    <InputBox
                        label="Username"
                        autoCompleteType="off"
                        autoCapitalize="none"
                        error="Please provide a valid username"
                        hasError={hasAttemptedSubmit && !isValidUsername}
                        value={username}
                        onValueChange={this.onChangeUsername}
                    />
                    {isRegister ? (
                        <InputBox
                            label="Email"
                            autoCompleteType="off"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            error="Please provide a valid e-mail"
                            hasError={hasAttemptedSubmit && !isValidEmail}
                            value={email}
                            onValueChange={this.onChangeEmail}
                        />
                    ) : null}
                    <InputBox
                        value={password}
                        label="Password"
                        secureTextEntry
                        hasError={hasAttemptedSubmit && !isValidPassword}
                        onValueChange={this.onChangePassword1}
                    />
                    {isRegister ? (
                        <InputBox
                            value={password2}
                            label="Repeat Password"
                            error="Passwords do not match"
                            secureTextEntry
                            hasError={hasAttemptedSubmit && !isMatchingPassword}
                            onValueChange={this.onChangePassword2}
                        />
                    ) : null}
                    {!isRegister ? (
                        <Link onPress={onForgot}>
                            <LinkText isMarked>Forgot password?</LinkText>
                        </Link>
                    ) : null}
                </InputsContainer>
                <Button message={buttonText} onPress={submitFn} isDisabled={!canAttemptLogin} />
                <Link isSeparate onPress={changeTab}>
                    <LinkText>{linkTextA}</LinkText>
                    <LinkText isMarked>{linkTextB}</LinkText>
                </Link>
            </Section>
        );
    }
}
