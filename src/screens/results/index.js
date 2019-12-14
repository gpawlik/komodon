// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getResultsByPrice, getResultsByDuration, getIsLoading } from '~/domains/results/selectors';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { ActionModal } from '~/components/action-modal';

import { SortBox } from './components/sort-box';
import { ResultBox } from './components/result-box';
import { SubscriptionBox } from './components/subscription-box';
import { SubscriptionContent } from './components/subscription-content';
import { Container, Content, FiltersBox, FiltersButton, FiltersText } from './styles';

export class ResultsScreen extends React.PureComponent {
    state = {
        type: 0,
        isSubscriptionVisible: true,
        isModalOpen: false,
    };

    handleType = (type: number) => this.setState({ type });

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    submitSubscription = () => this.setState({ isSubscriptionVisible: false, isModalOpen: false });

    render() {
        const { resultsByPrice, resultsByDuration, isLoading } = this.props;
        const { type, isModalOpen, isSubscriptionVisible } = this.state;
        const list = type === 0 ? resultsByPrice : resultsByDuration;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={() => this.props.navigation.goBack()} />
                <Content style={{ width: '100%' }}>
                    <ActionModal animationType="fade" isModalOpen={isModalOpen}>
                        <SubscriptionContent onClose={this.closeModal} onSubmit={this.submitSubscription} />
                    </ActionModal>

                    {isSubscriptionVisible ? <SubscriptionBox onPress={this.openModal} /> : null}

                    <SortBox onPress={this.handleType} value={type} />

                    {list.map(({ id, ...rest }) => {
                        return <ResultBox key={id} {...rest} />;
                    })}
                </Content>

                <FiltersBox>
                    <FiltersButton
                        onPress={() => {
                            this.props.navigation.navigate('FiltersModal');
                        }}
                    >
                        <FiltersText>Filters</FiltersText>
                    </FiltersButton>
                </FiltersBox>
            </Container>
        );
    }
}

export const mapStateToProps = (state: any): StateProps => ({
    resultsByPrice: getResultsByPrice(state),
    resultsByDuration: getResultsByDuration(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps = {};

export const Results = connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
