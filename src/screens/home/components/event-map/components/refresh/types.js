// @flow
import type { Coordinates as CoordinatesObject } from '~/domains/filters/types';

type OwnProps = {
    isActive: boolean,
    onRefresh: () => void,
};

export type StateProps = {
    isRefreshing: boolean,
};

export type DispatchProps = {
    fetchEvents: ({ coordinates: CoordinatesObject }) => void,
};

export type Props = OwnProps & StateProps & DispatchProps;
