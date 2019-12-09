// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getSubscriptions } from '~/domains/subscriptions/selectors';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { InputBox } from '~/components/input';
import { Button } from '~/components/button';

import {
    Container,
    Content,
    Section,
    ButtonsContainer,
    ButtonBox,
    ButtonText,
    Text,
    Disclaimer,
    InputsContainer,
    Link,
    LinkText,
    Separator,
    SeparatorText,
} from './styles';

export class LoginScreen extends React.PureComponent {
    render() {
        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    <Section>
                        <Text>Sign in with your social account</Text>
                        <ButtonsContainer>
                            <ButtonBox color="#4285F4">
                                <SVGIcon type={generalIcons.LOGO_GOOGLE} />
                                <ButtonText>Continue with Google</ButtonText>
                            </ButtonBox>
                            <ButtonBox color="#4267b2" isLast>
                                <SVGIcon type={generalIcons.LOGO_FACEBOOK} />
                                <ButtonText>Continue with Facebook</ButtonText>
                            </ButtonBox>
                        </ButtonsContainer>

                        <Disclaimer>We won't post to any of your accounts</Disclaimer>
                    </Section>

                    <Separator>
                        <SeparatorText>OR</SeparatorText>
                    </Separator>

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
                </Content>
            </Container>
        );
    }
}

export const mapStateToProps = (state: any): StateProps => ({
    subscriptions: getSubscriptions(state),
});

export const Login = connect(mapStateToProps, null)(LoginScreen);
