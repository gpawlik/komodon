// @flow
import type { List } from 'immutable';
import type { Filters } from '~/domains/filters/types';

export type StateProps = {
    categories: List<string>,
    timeSlot: number,
};

export type DispatchProps = {
    selectFilter: ({ filters: Filters }) => void,
};

export type Props = StateProps & DispatchProps;

export type State = Filters;
