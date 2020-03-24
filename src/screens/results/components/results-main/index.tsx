import * as React from 'react';
import { useSelector } from 'react-redux';

import { getResultsByPrice, getResultsByDuration } from '~/domains/results/selectors';
import { FlightItem } from '~/domains/results/types';

import { SortBox } from '../sort-box';
import { ResultBox } from '../result-box';

interface Props {
    type: number;
}

export const ResultsMain = ({ type }: Props) => {
    const resultsByPrice: Array<FlightItem> = useSelector(getResultsByPrice);
    const resultsByDuration: Array<FlightItem> = useSelector(getResultsByDuration);
    const list = type === 0 ? resultsByPrice : resultsByDuration;

    return (
        <>
            <SortBox onPress={this.handleType} value={type} />

            {list.map(({ id, ...rest }) => {
                return <ResultBox key={id} {...rest} />;
            })}
        </>
    );
};
