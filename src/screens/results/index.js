// @flow
import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';

import { ResultBox } from './components/result-box';
import { Container, Content, Text } from './styles';

export class ResultsScreen extends React.PureComponent {
    render() {
        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content>
                    <Text>Hello rsults</Text>
                    <ResultBox />
                </Content>
            </Container>
        );
    }
}
