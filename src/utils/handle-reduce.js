// @flow
import type { Reducer } from 'redux-actions';

export const handleReduce = <S, A>(fnSuccess: Reducer<S, A>, fnErr?: Reducer<S, A>): Reducer<S, A> => (
    state: S,
    action: A
) => (action && action.error ? fnErr || ((s, a) => s) : fnSuccess)(state, action);
