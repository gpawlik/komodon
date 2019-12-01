// @flow
import * as actions from '../actions';

import { filtersReducer as reducer, initialState } from '../';

describe('filters #reducer', () => {
    it('returns the expected state for a `selectFilter` action', () => {
        const payload = { filters: { foo: 1 } };
        const result = reducer(initialState, actions.selectFilter(payload));
        expect(result).toMatchInlineSnapshot(`
Immutable.Map {
  "filters": Immutable.Map {
    "foo": 1,
  },
}
`);
    });
});
