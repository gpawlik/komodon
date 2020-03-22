import { call } from 'redux-saga/effects';
import { searchOptions } from '~/domains/destinations/constants';

export function* getFlightResults(payload) {
    console.log({ payload });
    const type = payload.destinationPlace === searchOptions.EVERYWHERE_ID ? '/flexible' : '';

    return yield call(fetch, `https://dqd3py3vkf.execute-api.eu-west-1.amazonaws.com/v3/flights${type}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}
