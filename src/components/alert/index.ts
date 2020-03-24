import { connect } from 'react-redux';

import { getAlertText, getAlertType } from '~/domains/alerts/selectors';
import { ReduxState } from '~/types';

import { AlertComponent } from './component';
import { StateProps } from './types';

export const mapStateToProps = (state: ReduxState): StateProps => ({
    text: getAlertText(state),
    type: getAlertType(state),
});

export const Alert = connect(mapStateToProps)(AlertComponent);
