import { connect } from 'react-redux';

import { getSubscriptionHistory, getIsLoadingHistory } from '~/domains/subscriptions/selectors';
import { requestSubscriptionHistory, deleteSubscription } from '~/domains/subscriptions/actions';
import { ReduxState } from '~/types';

import { SubscriptionDetailsComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    subscriptionHistory: getSubscriptionHistory(state),
    isLoading: getIsLoadingHistory(state),
});

const mapDispatchToProps: DispatchProps = {
    requestSubscriptionHistory,
    deleteSubscription,
};

export const SubscriptionModal = connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetailsComponent);
