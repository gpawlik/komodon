// @flow
import { connect } from 'react-redux';

import { getAlertText, getAlertType } from '~/domains/alerts/selectors';

import { AlertComponent } from './component';
import type { StateProps } from './types';

export const mapStateToProps = (state: any): StateProps => ({
    text: getAlertText(state),
    type: getAlertType(state),
});

export const Alert = connect(mapStateToProps)(AlertComponent);
