import { call } from 'redux-saga/effects';

const bodyFromResponse = function*(result) {
    const body = yield call(() => result.text());
    return body.length ? JSON.parse(body) : {};
};

function* handleResult(result: string, parseJson: boolean): Generator<*, *, *> {
    let body, error;

    if (parseJson) {
        body = yield call(bodyFromResponse, result);
    }

    // TODO: handle errors properly
    return [body, error];
}

export const handleApi = (fn: any, parseJson: boolean = true) => {
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

        return yield handleResult(result, parseJson);
    };
};
