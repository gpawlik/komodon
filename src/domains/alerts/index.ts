import { SET_ALERT, RESET_ALERTS } from './actions';
import { alerts, alertTypes } from './constants';
import { State } from './types';

export const initialState: State = {
    alert: undefined,
};

export const alertsReducer = (state: State = initialState, action) => {
    switch (action.type) {
        case SET_ALERT: {
            const alertId = action.payload || alertTypes.GENERAL;
            const alert = alerts[alertId] || alerts.GENERAL;
            return {
                ...state,
                alert: {
                    id: alertId,
                    message: alert?.message,
                    type: alert?.type,
                },
            };
        }

        case RESET_ALERTS: {
            return action.payload === state.alert?.id ? initialState : state;
        }

        default:
            return state;
    }
};
