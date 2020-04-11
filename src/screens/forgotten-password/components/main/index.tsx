import * as React from 'react';

import { Screen } from '~/components/screen';
import { InputBox } from '~/components/input';
import { Button } from '~/components/button';
import { ConfirmBox } from '~/components/confirm-box';

import { Container, Content, Title, InputContainer } from '../../styles';

interface Props {
    onSubmit: (arg0: string) => void;
    isSubmitting: boolean;
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
        isValid: false,
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
        const { isSubmitting } = this.props;
        const { username, hasAttemptedSubmit, isValid } = this.state;

        return (
            <Screen title="Forgotten password">
                <Container>
                    <Content>
                        <Title>Enter your username and we'll send you a link with the confirmation code.</Title>
                        <InputContainer>
                            <InputBox
                                label="Username"
                                autoCompleteType="off"
                                autoCapitalize="none"
                                error="Please provide a valid username"
                                hasError={hasAttemptedSubmit && !isValid}
                                value={username}
                                onValueChange={this.onChangeValue}
                            />
                        </InputContainer>
                    </Content>

                    <ConfirmBox>
                        <Button
                            message="Submit"
                            isDisabled={!isValid}
                            onPress={this.onSubmit}
                            isSubmitting={isSubmitting}
                        />
                    </ConfirmBox>
                </Container>
            </Screen>
        );
    }
}
