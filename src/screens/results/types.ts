export interface StateProps {
    isLoading: boolean;
    isFlexible: boolean;
    hasResults: boolean;
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
