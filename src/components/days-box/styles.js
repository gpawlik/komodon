// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const DayItem = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : selectors.grey)};
    padding: ${selectors.ss2};
    margin: ${selectors.ss2};
    width: 80;
    height: 80;
    border-radius: 12;
    align-items: center;
    justify-content: center;
`;

export const DayText = styled(TextRegular3)`
    color: ${selectors.white};
`;
