import { State as Criteria, OptionalCriteria, CitySearch, ValidatedCriteria } from '~/domains/search/types';

export interface StateProps {
    validatedCriteria: ValidatedCriteria;
    roundTrip: boolean;
    navigate: any;
    departurePlace: CitySearch;
    destinationPlace: CitySearch;
    departureText: string;
    returnText: string;
    criteria: Criteria;
}

export interface DispatchProps {
    returnText: string;
    searchFlights: (arg0: Criteria) => void;
    setSearchCriteria: (arg0: OptionalCriteria) => void;
}

export type Props = StateProps & DispatchProps;

export interface State {
    hasAttemptedSubmit: boolean;
}
