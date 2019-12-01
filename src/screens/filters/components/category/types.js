// @flow
import type { List } from 'immutable';

export type Props = {
    categories: List<string>,
    onChange: string => void,
};
