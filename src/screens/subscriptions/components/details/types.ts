import { GetSubscriptionHistoryPayload, SubscriptionResult } from '~/domains/subscriptions/types';

export interface StateProps {
    subscriptionHistory: Array<any>;
    searchCriteria: SubscriptionResult;
    isLoading: boolean;
}

export interface DispatchProps {
    requestSubscriptionHistory: (arg0: GetSubscriptionHistoryPayload) => void;
    deleteSubscription: (arg0: string) => void;
}

export interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {}
