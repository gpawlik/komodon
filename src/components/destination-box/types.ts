import { List } from 'immutable';

export interface StateProps {
    destinations: List<any>;
    lastSearches: List<any>;
}

export interface DispatchProps {
    getDestinations: (arg0: { destination: string }) => {};
}

interface Value {
    placeName: string;
}

interface OwnProps {
    value: Value;
    onValueChange: (arg0: any) => void;
    isDestination?: boolean;
}

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {
    value: string;
}
