import { Auth } from 'aws-amplify';
import { call, put, takeLatest } from 'redux-saga/effects';

import { LOGIN_ATTEMPT, loginSuccess, loginError, SIGNUP_ATTEMPT, signupSuccess, signupError } from './actions';
import { LoginAction, SignupAction } from './types';

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

export const authSagas = [watchLogin, watchSignup];
