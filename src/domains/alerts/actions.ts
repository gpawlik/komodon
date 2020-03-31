export const SET_ALERT: 'alerts/SET' = 'alerts/SET';
export const setAlert = (payload: string) => ({ type: SET_ALERT, payload });

export const RESET_ALERTS: 'alerts/RESET_ALERTS' = 'alerts/RESET_ALERTS';
export const resetAlerts = (payload: string) => ({ type: RESET_ALERTS, payload });
