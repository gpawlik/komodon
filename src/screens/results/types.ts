export interface StateProps {
    resultsByPrice: Array<any>;
    resultsByDuration: Array<any>;
    isLoading: boolean;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & OwnProps;

export interface State {
    type: number;
    isSubscriptionVisible: boolean;
    isModalOpen: boolean;
}
