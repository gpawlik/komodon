// @flow
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';

import { selectors } from '~/theme/main';

export const Container = styled.View``;

export const Label = styled(TextRegular3)`
    padding: 10px 20px;
`;

export const ValueButton = styled.TouchableOpacity`
    border-radius: 3px;
    border-width: 1px;
    border-color: black;
    width: 200px;
    height: 40px;
`;

export const Value = styled(TextRegular3)`
    padding: 10px 20px;
`;
