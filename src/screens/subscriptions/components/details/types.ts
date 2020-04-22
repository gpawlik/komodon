import { SubscriptionResult } from '~/domains/subscriptions/types';
import { requestSubscriptionHistory, deleteSubscription } from '~/domains/subscriptions/actions';

export interface StateProps {
    subscriptionHistory: Array<any>;
    searchCriteria: SubscriptionResult;
    id: string;
    isLoading: boolean;
}

export interface DispatchProps {
    requestSubscriptionHistory: typeof requestSubscriptionHistory;
    deleteSubscription: typeof deleteSubscription;
}

export interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {}
