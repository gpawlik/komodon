// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getSubscriptions } from '~/domains/subscriptions/selectors';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { Tabs } from '~/components/tabs';

import { SocialLogin } from './components/social';
import { StandardLogin } from './components/standard';

import { Container, Content, Separator, SeparatorText } from './styles';

export class LoginScreen extends React.PureComponent {
    render() {
        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Tabs tabTitles={['Login', 'Sign up']}>
                    <Content>
                        <SocialLogin />

                        <Separator>
                            <SeparatorText>OR</SeparatorText>
                        </Separator>

                        <StandardLogin />
                    </Content>

                    <Content>
                        <SocialLogin />

                        <Separator>
                            <SeparatorText>OR</SeparatorText>
                        </Separator>

                        <StandardLogin />
                    </Content>
                </Tabs>
            </Container>
        );
    }
}

export const mapStateToProps = (state: any): StateProps => ({
    subscriptions: getSubscriptions(state),
});

export const Login = connect(mapStateToProps, null)(LoginScreen);
