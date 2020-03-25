import * as React from 'react';

import * as routes from '~/constants/routes';
import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { Tabs } from '~/components/tabs';

import { SocialLogin } from './components/social';
import { StandardLogin } from './components/standard';

import { Container, Content, Separator, SeparatorText } from './styles';
import { Props } from './types';

export const LoginComponent = (props: Props) => {
    const [currentTab, changeTab] = React.useState(0);

    return (
        <Container>
            <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => props.navigation.goBack()} />
            <Tabs tabTitles={['Log in', 'Sign up']} currentTab={currentTab}>
                <Content>
                    <SocialLogin title="Please log in with" />

                    <Separator>
                        <SeparatorText>OR</SeparatorText>
                    </Separator>

                    <StandardLogin
                        changeTab={() => changeTab(1)}
                        onForgot={() => props.navigation.navigate(routes.forgottenPassword)}
                    />
                </Content>

                <Content>
                    <SocialLogin title="Please sign up with" />

                    <Separator>
                        <SeparatorText>OR</SeparatorText>
                    </Separator>

                    <StandardLogin changeTab={() => changeTab(0)} isRegister />
                </Content>
            </Tabs>
        </Container>
    );
};
