import { Auth } from 'aws-amplify';
import { call, select, put } from 'redux-saga/effects';

import { refreshToken, logout } from '~/domains/auth/actions';
import { getIsLoggedIn } from '~/domains/auth/selectors';

const bodyFromResponse = function*(result) {
    const body = yield call(() => result.text());
    return body.length ? JSON.parse(body) : {};
};

function* handleResult(result: any, parseJson: boolean) {
    let body;

    if (parseJson) {
        body = yield call(bodyFromResponse, result);
    }

    return [body, result.status];
}

function* refreshTokenEffect(fn, params) {
    const isLoggedIn = yield select(getIsLoggedIn);

    if (isLoggedIn) {
        try {
            // aws-amplify handles refreshing tokens itself
            const session = yield call([Auth, 'currentSession']);
            const token = session?.idToken?.jwtToken;

            if (token) {
                // If we got back a valid token - rerun the original request
                yield put(refreshToken(token));
                return yield call(fn, ...params);
            }
        } catch (e) {
            console.log(e);
        }

        yield put(logout());
    }
}

export const handleApi = (fn: any, parseJson: boolean = true, attempts = 0) => {
    if (attempts >= 5) {
        throw Error('Too many failed attempts');
    }

    return function* apiGenerator(...params: any) {
        let result;

        try {
            result = yield call(fn, ...params);
        } catch (err) {
            throw new Error(err.message);
        }

        if (!result) {
            return;
        }

        return yield result.status === 401
            ? refreshTokenEffect(handleApi(fn, parseJson, attempts + 1), params)
            : handleResult(result, parseJson);
    };
};
