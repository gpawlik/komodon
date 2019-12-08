// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';

import { getResultsById, getResultsSortByPrice } from '~/domains/results/selectors';

import { ResultBox } from './components/result-box';
import { Container, Content, Text } from './styles';

export class ResultsScreen extends React.PureComponent {
    render() {
        const { results, resultsByPrice } = this.props;
        console.log({ results, resultsByPrice });
        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content>
                    <Text>Hello rsults</Text>
                    {resultsByPrice.map(({ id, ...rest }) => {
                        return <ResultBox key={id} {...rest} />;
                    })}
                </Content>
            </Container>
        );
    }
}

export const mapStateToProps = (state: any): StateProps => ({
    results: getResultsById(state),
    resultsByPrice: getResultsSortByPrice(state),
});

const mapDispatchToProps = {};

export const Results = connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
