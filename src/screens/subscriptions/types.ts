export interface StateProps {
    subscriptions: Array<any>;
    isLoading: boolean;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & OwnProps;

export interface State {
    type: number;
}
