import * as React from 'react';

import { Screen } from '~/components/screen';
import { InputBox } from '~/components/input';
import { ConfirmBox } from '~/components/confirm-box';

import { Container, Content, Title } from '../../styles';

interface Props {
    onSubmit: (arg0: string) => void;
}

export interface State {
    username: string;
    hasAttemptedSubmit: boolean;
    isValid: boolean;
}

export class ForgottenPasswordMain extends React.PureComponent<Props, State> {
    state = {
        username: '',
        hasAttemptedSubmit: false,
        isValid: true,
    };

    onSubmit = () => {
        const { username } = this.state;
        this.setState({ hasAttemptedSubmit: true });
        this.props.onSubmit(username);
    };

    onChangeValue = (value: string) => {
        this.setState({ username: value, isValid: !!value.trim().length });
    };

    render() {
        const { username, hasAttemptedSubmit, isValid } = this.state;

        return (
            <Screen title="Forgotten password">
                <Container>
                    <Content>
                        <Title>Enter your username and we'll send you a link with the confirmation code.</Title>
                        <InputBox
                            label="Username"
                            autoCompleteType="off"
                            autoCapitalize="none"
                            error="Please provide a valid username"
                            hasError={hasAttemptedSubmit && !isValid}
                            value={username}
                            onValueChange={this.onChangeValue}
                        />
                    </Content>

                    <ConfirmBox text="Send email" isDisabled={!isValid} onPress={this.onSubmit} />
                </Container>
            </Screen>
        );
    }
}
