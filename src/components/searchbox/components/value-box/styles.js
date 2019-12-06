// @flow
import styled from 'styled-components';

import { TextMedium1, TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: #dedede;
    height: 60px;
    padding: 5px 10px;
    margin-bottom: 10;
    flex: 1;
`;

export const Label = styled(TextMedium1)``;

export const Value = styled(TextRegular3)``;
