// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { InputBox } from '~/components/input';
import { ConfirmBox } from '~/components/confirm-box';

import { Container, Content, Title } from './styles';

type Props = {};

export class ForgottenPassword extends React.PureComponent<Props> {
    render() {
        return (
            <Screen title="Forgotten password">
                <Container>
                    <Content>
                        <Title>Enter your email and we'll send you a link with more instructions.</Title>
                        <InputBox />
                    </Content>

                    <ConfirmBox text="Send email" />
                </Container>
            </Screen>
        );
    }
}
