// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';

import { getResultsByPrice, getResultsByDuration } from '~/domains/results/selectors';

import { SortBox } from './components/sort-box';
import { ResultBox } from './components/result-box';
import { Container, Content } from './styles';

export class ResultsScreen extends React.PureComponent {
    state = {
        type: 0,
    };

    handleType = (type: number) => this.setState({ type });

    render() {
        const { resultsByPrice, resultsByDuration } = this.props;
        const { type } = this.state;
        const list = type === 0 ? resultsByPrice : resultsByDuration;

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content>
                    <SortBox onPress={this.handleType} value={type} />
                    {list.map(({ id, ...rest }) => {
                        return <ResultBox key={id} {...rest} />;
                    })}
                </Content>
            </Container>
        );
    }
}

export const mapStateToProps = (state: any): StateProps => ({
    resultsByPrice: getResultsByPrice(state),
    resultsByDuration: getResultsByDuration(state),
});

const mapDispatchToProps = {};

export const Results = connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
