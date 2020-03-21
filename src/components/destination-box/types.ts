export interface StateProps {
    destinations: Array<any>;
    lastSearches: Array<any>;
}

export interface DispatchProps {
    getDestinations: () => {};
}

export type Props = StateProps & DispatchProps;

export interface State {
    value: string;
}
