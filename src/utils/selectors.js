// @flow
import * as R from 'ramda';

export const getIdFromProps = (_: any, props: any) => R.propOr('', 'id')(props);
