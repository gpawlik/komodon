import { CitySearch } from '~/domains/search/types';

export interface StateProps {
    departurePlace: CitySearch;
    destinationPlace: CitySearch;
    filters: Array<any>;
}

export interface DispatchProps {
    setSearchCriteria: () => void;
}

interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
