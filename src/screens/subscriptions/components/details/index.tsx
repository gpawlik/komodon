import { connect } from 'react-redux';

import { getSubscriptionHistory, getIsLoadingHistory, getCriteriaById } from '~/domains/subscriptions/selectors';
import { requestSubscriptionHistory, deleteSubscription } from '~/domains/subscriptions/actions';
import { ReduxState } from '~/types';

import { SubscriptionDetailsComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState, props): StateProps => {
    const id = props?.navigation?.state?.params?.id || props?.params?.id;

    return {
        subscriptionHistory: getSubscriptionHistory(state),
        searchCriteria: getCriteriaById(state, { id }),
        isLoading: getIsLoadingHistory(state),
        id,
    };
};

const mapDispatchToProps: DispatchProps = {
    requestSubscriptionHistory,
    deleteSubscription,
};

export const SubscriptionModal = connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetailsComponent);
