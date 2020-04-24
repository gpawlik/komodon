import { State as Criteria } from '~/domains/search/types';

export interface StateProps {
    isLoading: boolean;
    isFlexible: boolean;
    hasResults: boolean;
    criteria: Criteria;
}

export interface DispatchProps {
    searchFlights: (arg0: Criteria) => void;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {
    type: number;
    isSubscriptionVisible: boolean;
    isModalOpen: boolean;
}
