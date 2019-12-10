// @flow
import * as React from 'react';

import { InputBox } from '~/components/input';
import { Button } from '~/components/button';

import { Section, InputsContainer, Link, LinkText } from './styles';

export class StandardLogin extends React.PureComponent {
    render() {
        const { isRegister } = this.props;
        const linkTextA = isRegister ? 'Already have an account?' : "Don't have an account?";
        const linkTextB = isRegister ? 'Log in!' : 'Sign Up Now!';
        return (
            <Section>
                <InputsContainer>
                    <InputBox
                        label="Email"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                    <InputBox label="Password" secureTextEntry />
                    {isRegister ? <InputBox label="Repeat Password" /> : null}
                    {!isRegister ? (
                        <Link>
                            <LinkText isMarked>Forgot password?</LinkText>
                        </Link>
                    ) : null}
                </InputsContainer>
                <Button message="Sign in" />
                <Link isSeparate onPress={this.props.changeTab}>
                    <LinkText>{linkTextA}</LinkText>
                    <LinkText isMarked>{linkTextB}</LinkText>
                </Link>
            </Section>
        );
    }
}
