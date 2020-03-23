import { connect } from 'react-redux';

import { getSubscriptions, getIsLoading } from '~/domains/subscriptions/selectors';
import { ReduxState } from '~/types';

import { SubscriptionsComponent } from './component';
import { StateProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    subscriptions: getSubscriptions(state),
    isLoading: getIsLoading(state),
});

export const Subscriptions = connect(mapStateToProps, null)(SubscriptionsComponent);
