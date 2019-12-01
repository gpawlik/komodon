// @flow
import styled from 'styled-components';

import { TextMedium2 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View`
    border-color: ${selectors.red};
    border-width: 2;
    border-radius: 4;
    width: 45;
    height: 52;
    align-items: stretch;
`;

export const DayBox = styled.View`
    background-color: ${selectors.white};
    justify-content: center;
    align-items: center;
    height: 24;
`;

export const DayText = styled(TextMedium2)`
    color: ${selectors.midnight};
`;

export const MonthBox = styled.View`
    background-color: ${selectors.red};
    justify-content: center;
    align-items: center;
    height: 24;
`;

export const MonthText = styled(TextMedium2)`
    color: ${selectors.white};
`;
