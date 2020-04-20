import { connect } from 'react-redux';

import { getSubscriptions, getIsLoading } from '~/domains/subscriptions/selectors';
import { requestSubscriptions } from '~/domains/subscriptions/actions';
import { ReduxState } from '~/types';

import { SubscriptionsComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    subscriptions: getSubscriptions(state),
    isLoading: getIsLoading(state),
});

const mapDispatchToProps: DispatchProps = {
    requestSubscriptions,
};

export const Subscriptions = connect(mapStateToProps, mapDispatchToProps)(SubscriptionsComponent);
