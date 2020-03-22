import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { ActionModal } from '~/components/action-modal';
import { ConfirmBox } from '~/components/confirm-box';

import { ResultsMain } from './components/results-main';
import { ResultsFlexible } from './components/results-flexible';
import { SubscriptionBox } from './components/subscription-box';
import { SubscriptionContent } from './components/subscription-content';
import {
    Container,
    Content,
    FiltersBox,
    FiltersButton,
    FiltersText,
    EmptyContainer,
    EmptyBox,
    EmptyText,
} from './styles';

import { Props, State } from './types';

export class ResultsComponent extends React.PureComponent<Props, State> {
    state = {
        type: 0,
        isSubscriptionVisible: true,
        isModalOpen: false,
    };

    handleType = (type: number) => this.setState({ type });

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    submitSubscription = () => this.setState({ isSubscriptionVisible: false, isModalOpen: false });

    goBack = () => this.props.navigation.goBack();

    render() {
        const { isLoading, isFlexible, hasResults } = this.props;
        const { type, isModalOpen, isSubscriptionVisible } = this.state;

        if (isLoading) {
            return <LoadingScreen />;
        }

        return (
            <Container>
                <Header backIcon={generalIcons.ARROW_LEFT} backAction={this.goBack} />
                {hasResults ? (
                    <React.Fragment>
                        <Content>
                            <ActionModal animationType="fade" isModalOpen={isModalOpen}>
                                <SubscriptionContent onClose={this.closeModal} onSubmit={this.submitSubscription} />
                            </ActionModal>

                            {isSubscriptionVisible ? <SubscriptionBox onPress={this.openModal} /> : null}

                            {!isFlexible ? <ResultsMain type={type} /> : <ResultsFlexible />}
                        </Content>

                        {!isFlexible ? (
                            <FiltersBox>
                                <FiltersButton
                                    onPress={() => {
                                        this.props.navigation.navigate('FiltersModal');
                                    }}
                                >
                                    <FiltersText>Filters</FiltersText>
                                </FiltersButton>
                            </FiltersBox>
                        ) : null}
                    </React.Fragment>
                ) : (
                    <EmptyContainer>
                        <EmptyBox>
                            <EmptyText>
                                Sorry, we have not found any results for your search. Please try again with a different
                                criteria.
                            </EmptyText>
                        </EmptyBox>
                        <ConfirmBox text="Try again" onPress={this.goBack} />
                    </EmptyContainer>
                )}
            </Container>
        );
    }
}
