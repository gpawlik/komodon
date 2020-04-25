import * as React from 'react';

import * as routes from '~/constants/routes';
import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/loading-screen';
import { ActionModal } from '~/components/action-modal';
import { Button } from '~/components/button';
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

    componentDidMount() {
        const { searchFlights, criteria } = this.props;
        searchFlights(criteria);
    }

    handleType = (type: number) => this.setState({ type });

    openModal = () => this.setState({ isModalOpen: true });

    closeModal = () => this.setState({ isModalOpen: false });

    submitSubscription = () => this.setState({ isSubscriptionVisible: false, isModalOpen: false });

    goBack = () => this.props.navigation?.goBack();

    goToLogin = () => this.props.navigation?.navigate(routes.login);

    render() {
        const { isLoading, isFlexible, hasResults, isCriteriaValid } = this.props;
        const { type, isModalOpen, isSubscriptionVisible } = this.state;

        const showSubscriptionBox = isSubscriptionVisible && !isFlexible && isCriteriaValid;

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
                                <SubscriptionContent
                                    onClose={this.closeModal}
                                    onSubmit={this.submitSubscription}
                                    onAuthRequired={this.goToLogin}
                                />
                            </ActionModal>

                            {showSubscriptionBox ? <SubscriptionBox onPress={this.openModal} /> : null}

                            {!isFlexible ? (
                                <ResultsMain type={type} handleType={this.handleType} />
                            ) : (
                                <ResultsFlexible />
                            )}
                        </Content>

                        {!isFlexible ? (
                            <FiltersBox>
                                <FiltersButton
                                    onPress={() => {
                                        this.props.navigation?.navigate(routes.filtersModal);
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
                        <ConfirmBox>
                            <Button message="Try again" onPress={this.goBack} />
                        </ConfirmBox>
                    </EmptyContainer>
                )}
            </Container>
        );
    }
}
