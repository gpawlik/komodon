// @flow
import * as React from 'react';

import { InputBox } from '~/components/input';
import { Button } from '~/components/button';

import { Section, Text, InputsContainer, Link, LinkText } from './styles';

export class StandardLogin extends React.PureComponent {
    render() {
        return (
            <Section>
                <Text>Sign in with your username and password</Text>
                <InputsContainer>
                    <InputBox label="Username" />
                    <InputBox label="Password" />
                    <Link>
                        <LinkText>Forgot password?</LinkText>
                    </Link>
                </InputsContainer>
                <Button message="Sign in" />
            </Section>
        );
    }
}
