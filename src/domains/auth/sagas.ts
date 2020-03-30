import { Auth } from 'aws-amplify';
import { call, put, takeLatest } from 'redux-saga/effects';

import { setAlert } from '~/domains/alerts/actions';
import {
    LOGIN_ATTEMPT,
    loginSuccess,
    loginError,
    SIGNUP_ATTEMPT,
    signupSuccess,
    signupError,
    SEND_FORGOTTEN_PASSWORD,
    SEND_NEW_CREDENTIALS,
} from './actions';
import { LoginAction, SignupAction, ForgottenPasswordAction, NewCredentialsAction } from './types';

export function* loginSaga({ payload: { username, password, successCb } }: LoginAction) {
    try {
        const result = yield call([Auth, 'signIn'], {
            username,
            password,
        });

        yield put(loginSuccess(result));
        yield call(successCb);
    } catch (e) {
        console.log(e);
        yield put(loginError());
        yield put(setAlert(e?.code));
    }
}

export function* signupSaga({ payload: { username, email, password, successCb } }: SignupAction) {
    try {
        const result = yield call([Auth, 'signUp'], {
            username,
            password,
            attributes: {
                email,
                name: username,
            },
        });

        yield put(signupSuccess(result));
        yield call(successCb);
    } catch (e) {
        console.log(e);
        yield put(signupError());
        yield put(setAlert(e?.code));
    }
}

export function* sendForgottenPasswordSaga({ payload: { username = '', successCb } }: ForgottenPasswordAction) {
    try {
        const result = yield call([Auth, 'forgotPassword'], username);

        //yield put(signupSuccess(result));
        console.log({ result, successCb, email: result?.CodeDeliveryDetails });
        yield call(successCb, username);
    } catch (e) {
        console.log(e);
        //yield put(signupError());
        yield put(setAlert(e?.code));
    }
}

export function* sendNewCredentialsSaga({ payload: { username, code, password } }: NewCredentialsAction) {
    try {
        const result = yield call([Auth, 'forgotPasswordSubmit'], username, code, password);

        //yield put(signupSuccess(result));
        console.log({ result });
        // yield call(successCb);
    } catch (e) {
        console.log(e);
        //yield put(signupError());
        yield put(setAlert(e?.code));
    }
}

function* watchLogin() {
    // @ts-ignore
    yield takeLatest(LOGIN_ATTEMPT, loginSaga);
}

function* watchSignup() {
    // @ts-ignore
    yield takeLatest(SIGNUP_ATTEMPT, signupSaga);
}

function* watchSendForgottenPassword() {
    // @ts-ignore
    yield takeLatest(SEND_FORGOTTEN_PASSWORD, sendForgottenPasswordSaga);
}

function* watchSendNewCredentials() {
    // @ts-ignore
    yield takeLatest(SEND_NEW_CREDENTIALS, sendNewCredentialsSaga);
}

export const authSagas = [watchLogin, watchSignup, watchSendForgottenPassword, watchSendNewCredentials];
