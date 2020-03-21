import { CitySearch } from '~/domains/search/types';

export interface StateProps {
    departurePlace: CitySearch;
    destinationPlace: CitySearch;
    filters: any;
}

export interface DispatchProps {
    setSearchCriteria: (arg0: any) => void;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;
