// @flow
import { type CitySearch } from '~/domains/search/types';

export type StateProps = {
    departurePlace: CitySearch,
    destinationPlace: CitySearch,
    filters: Array<*>,
};

export type DispatchProps = {
    setSearchCriteria: () => void,
};

type OwnProps = {};

export type Props = { ...StateProps, ...DispatchProps, ...OwnProps };
