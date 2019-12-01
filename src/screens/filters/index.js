// @flow
import { connect } from 'react-redux';

import { getFilterCategories, getFilterTimeSlot } from '~/domains/filters/selectors';
import { selectFilter } from '~/domains/filters/actions';
import type { StateProps, DispatchProps } from './types';

import { FiltersComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    categories: getFilterCategories(state),
    timeSlot: getFilterTimeSlot(state),
});

const mapDispatchToProps: DispatchProps = {
    selectFilter,
};

export const Filters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersComponent);
