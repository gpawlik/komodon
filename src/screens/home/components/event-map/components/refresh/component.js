// @flow
import * as React from 'react';

import { Container, Button, Text } from './styles';
import type { Props } from './types';

export class RefreshComponent extends React.PureComponent<Props> {
    onRefresh = () => {
        const { isActive, isRefreshing, onRefresh } = this.props;
        const isDisabled = !isActive || isRefreshing;

        !isDisabled && onRefresh();
    };

    render() {
        const { isActive, isRefreshing } = this.props;
        const isDisabled = !isActive || isRefreshing;

        return (
            <Container isDisabled={isDisabled}>
                <Button onPress={this.onRefresh}>
                    <Text message="Refresh results" />
                </Button>
            </Container>
        );
    }
}
