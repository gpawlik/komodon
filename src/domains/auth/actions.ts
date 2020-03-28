import { LoginPayload, LoginSuccessPayload } from './types';

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
