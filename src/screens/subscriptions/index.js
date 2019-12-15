// @flow
import { connect } from 'react-redux';

import { getSubscriptions, getIsLoading } from '~/domains/subscriptions/selectors';

import { SubscriptionsComponent } from './component';
import { type StateProps } from './types';

export const mapStateToProps = (state: any): StateProps => ({
    subscriptions: getSubscriptions(state),
    isLoading: getIsLoading(state),
});

export const Subscriptions = connect(mapStateToProps, null)(SubscriptionsComponent);
