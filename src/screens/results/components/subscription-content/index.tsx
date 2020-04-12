import { connect } from 'react-redux';

import {
    getDeparturePlace,
    getDestinationPlace,
    getDepartureText,
    getReturnText,
    getSubscriptionCriteria,
} from '~/domains/search/selectors';
import { getIsLoggedIn } from '~/domains/auth/selectors';
import { createSubscription } from '~/domains/subscriptions/actions';
import { ReduxState } from '~/types';

import { SubscriptionContentComponent } from './component';
import { StateProps, DispatchProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    departure: getDeparturePlace(state),
    destination: getDestinationPlace(state),
    departureText: getDepartureText(state),
    returnText: getReturnText(state),
    subscriptionCriteria: getSubscriptionCriteria(state),
    isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps: DispatchProps = {
    createSubscription,
};

export const SubscriptionContent = connect(mapStateToProps, mapDispatchToProps)(SubscriptionContentComponent);
