import * as React from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

import { getResultsFlexible } from '~/domains/results/selectors';
import { DestinationResult } from '~/domains/results/types';

export const ResultsFlexible = () => {
    const results: Array<DestinationResult> = useSelector(getResultsFlexible);

    return (
        <>
            {results.map(item => {
                console.log({ item });
                return <Text>{item.price}</Text>;
            })}
        </>
    );
};
