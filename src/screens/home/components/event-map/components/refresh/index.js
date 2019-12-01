// @flow
import { connect } from 'react-redux';

//import { getIsRefreshing } from '~/domains/events/selectors';
import { fetchEvents } from '~/domains/events/actions';
import type { StateProps, DispatchProps } from './types';

import { RefreshComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    isRefreshing: false,
});

const mapDispatchToProps: DispatchProps = {
    fetchEvents,
};

export const Refresh = connect(
    mapStateToProps,
    mapDispatchToProps
)(RefreshComponent);
