export interface StateProps {
    subscriptions: Array<any>;
    isLoading: boolean;
}

export interface DispatchProps {
    requestSubscriptions: () => void;
    deleteSubscription: (arg0: string) => void;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {
    type: number;
}
