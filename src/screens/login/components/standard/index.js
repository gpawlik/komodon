// @flow
import * as React from 'react';

import { InputBox } from '~/components/input';
import { Button } from '~/components/button';

import { Section, InputsContainer, Link, LinkText } from './styles';

export class StandardLogin extends React.PureComponent {
    render() {
        return (
            <Section>
                <InputsContainer>
                    <InputBox label="Username" />
                    <InputBox label="Password" />
                    <Link>
                        <LinkText isMarked>Forgot password?</LinkText>
                    </Link>
                </InputsContainer>
                <Button message="Sign in" />
                <Link isSeparate onPress={this.props.changeTab}>
                    <LinkText>Don't have an account?</LinkText>
                    <LinkText isMarked>Sign Up Now!</LinkText>
                </Link>
            </Section>
        );
    }
}
