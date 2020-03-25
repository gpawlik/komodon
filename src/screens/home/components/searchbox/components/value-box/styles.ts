import * as R from 'ramda';
import styled from 'styled-components';

import { TextMedium1, TextRegular2, TextMedium7 } from '~/components/text';

import { selectors } from '~/theme/main';

const getHighlightColor = R.cond([
    [R.prop('hasError'), R.always(selectors.red)],
    [R.prop('isLight'), R.always('#ddd')],
    [R.T, R.always(selectors.slate)],
]);

const getLabelColor = R.cond([
    [R.prop('hasError'), R.always(selectors.red)],
    [R.prop('isLight'), R.always('#aaa')],
    [R.T, R.always(selectors.slate)],
]);

export const Container = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
    height: ${({ isLarge }) => (isLarge ? 105 : 60)};
    padding-top: ${({ isLarge }) => (isLarge ? 15 : 5)};
    padding-bottom: 5px;
    padding-horizontal: 10px;
    margin-bottom: 10;
    flex: 1;
    width: 50%;
    align-items: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const Label = styled(TextMedium1)`
    margin-bottom: 6;
    color: ${getLabelColor};
`;

export const Highlight = styled(TextMedium7)`
    color: ${getHighlightColor};
`;

export const Value = styled(TextRegular2)`
    color: ${getLabelColor};
`;
