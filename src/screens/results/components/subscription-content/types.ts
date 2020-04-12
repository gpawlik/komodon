import { SubscriptionPayload } from '~/domains/subscriptions/types';

interface Place {
    placeCode: string;
    placeName: string;
}

export interface StateProps {
    departure: Place;
    destination: Place;
    departureText: string;
    returnText: string;
    subscriptionCriteria: SubscriptionPayload;
    isLoggedIn: boolean;
}

export interface DispatchProps {
    createSubscription: (arg0: SubscriptionPayload) => void;
}

interface OwnProps {
    onPress: () => void;
    onClose: () => void;
    onSubmit: () => void;
    onAuthRequired: () => void;
}

export type Props = StateProps & DispatchProps & OwnProps;
