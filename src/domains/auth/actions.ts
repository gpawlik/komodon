import { LoginPayload, LoginSuccessPayload, ForgottenPasswordPayload, NewCredentialsPayload } from './types';

export const LOGIN_ATTEMPT = 'auth/LOGIN_ATTEMPT';
export const loginAttempt = (payload: LoginPayload) => ({
    type: LOGIN_ATTEMPT,
    payload,
});

export const LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS' = 'auth/LOGIN_SUCCESS';
export const loginSuccess = (payload: LoginSuccessPayload) => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const LOGIN_ERROR: 'auth/LOGIN_ERROR' = 'auth/LOGIN_ERROR';
export const loginError = () => ({
    type: LOGIN_ERROR,
});

export const LOGOUT_ATTEMPT = 'auth/LOGOUT_ATTEMPT';
export const logout = () => ({
    type: LOGOUT_ATTEMPT,
});

export const LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS' = 'auth/LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
});

export const LOGOUT_ERROR: 'auth/LOGOUT_ERROR' = 'auth/LOGOUT_ERROR';
export const logoutError = () => ({
    type: LOGOUT_ERROR,
});

export const SIGNUP_ATTEMPT = 'auth/SIGNUP_ATTEMPT';
export const signupAttempt = (payload: LoginPayload) => ({
    type: SIGNUP_ATTEMPT,
    payload,
});

export const SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS' = 'auth/SIGNUP_SUCCESS';
export const signupSuccess = (payload: LoginSuccessPayload) => ({
    type: SIGNUP_SUCCESS,
    payload,
});

export const SIGNUP_ERROR: 'auth/SIGNUP_ERROR' = 'auth/SIGNUP_ERROR';
export const signupError = () => ({
    type: SIGNUP_ERROR,
});

export const SEND_FORGOTTEN_PASSWORD = 'auth/SEND_FORGOTTEN_PASSWORD';
export const sendForgottenPassword = (payload: ForgottenPasswordPayload) => ({
    type: SEND_FORGOTTEN_PASSWORD,
    payload,
});

export const SEND_NEW_CREDENTIALS = 'auth/SEND_NEW_CREDENTIALS';
export const sendNewCredentails = (payload: NewCredentialsPayload) => ({
    type: SEND_NEW_CREDENTIALS,
    payload,
});

export const REFRESH_TOKEN = 'auth/REFRESH_TOKEN';
export const refreshToken = (payload: string) => ({
    type: REFRESH_TOKEN,
    payload,
});
