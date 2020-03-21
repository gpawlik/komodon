import styled from 'styled-components';

import { TextRegular2 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    background-color: ${selectors.white};
    margin: 14px 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Content = styled.View`
    margin-vertical: 20px;
`;

export const DayItem = styled.TouchableOpacity`
    background-color: ${({ isSelected }) => (isSelected ? selectors.slate : selectors.grey)};
    padding: ${selectors.ss2};
    margin: 6px;
    width: 110;
    height: 110;
    border-radius: 55;
    align-items: center;
    justify-content: center;
    border-width: 5;
    border-color: ${({ isSelected }) => (isSelected ? '#53718a' : '#bccbe0')};
`;

export const DayText = styled(TextRegular2)`
    color: ${selectors.white};
`;
