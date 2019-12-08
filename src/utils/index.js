// @flow
import * as R from 'ramda';

export const filterEmpty = R.filter(R.complement(R.isEmpty));
