// @flow
import * as React from 'react';

import { InputBox } from '~/components/input';
import { Button } from '~/components/button';

import { Section, InputsContainer, Link, LinkText } from './styles';

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export class StandardLogin extends React.PureComponent {
    state = {
        isValidEmail: true,
        isValidPassword: true,
        isMatchingPassword: true,
        hasAttemptedSubmit: false,
        email: '',
        password1: '',
        password2: '',
    };

    onSubmit = () => {
        const { isValidEmail, isValidPassword, isMatchingPassword } = this.state;
        this.setState({ hasAttemptedSubmit: true });

        if (isValidEmail && isValidPassword && isMatchingPassword) {
            console.log('proceed');
        }
    };

    onChangeEmail = value => {
        this.setState({ email: value, isValidEmail: emailIsValid(value) });
    };

    onChangePassword1 = value => {
        this.setState({
            password1: value,
            isValidPassword: value.length >= 6,
        });
    };

    onChangePassword2 = value => {
        this.setState({ password2: value, isMatchingPassword: this.state.password1 !== value });
    };

    render() {
        const { isRegister } = this.props;
        const {
            email,
            password1,
            password2,
            isValidEmail,
            isValidPassword,
            isMatchingPassword,
            hasAttemptedSubmit,
        } = this.state;
        const linkTextA = isRegister ? 'Already have an account?' : "Don't have an account?";
        const linkTextB = isRegister ? 'Log in!' : 'Sign Up Now!';

        const canAttemptLogin = email.trim() !== '' && password1.trim() !== '';
        return (
            <Section>
                <InputsContainer>
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
                    <InputBox
                        value={password1}
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
                            hasError={hasAttemptedSubmit && !isMatchingPassword}
                            onValueChange={this.onChangePassword2}
                        />
                    ) : null}
                    {!isRegister ? (
                        <Link>
                            <LinkText isMarked>Forgot password?</LinkText>
                        </Link>
                    ) : null}
                </InputsContainer>
                <Button message="Sign in" onPress={this.onSubmit} isDisabled={!canAttemptLogin} />
                <Link isSeparate onPress={this.props.changeTab}>
                    <LinkText>{linkTextA}</LinkText>
                    <LinkText isMarked>{linkTextB}</LinkText>
                </Link>
            </Section>
        );
    }
}
