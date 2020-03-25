import styled from 'styled-components';

import { selectors } from '~/theme/main';

import { TextRegular2, TextMedium2 } from '~/components/text';

export const Container = styled.View`
    background-color: ${selectors.white};
    border-radius: 8;
    margin-vertical: 8;
    padding: 12px 14px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextBox = styled.View``;

export const CityName = styled(TextMedium2)``;

export const CountryName = styled(TextRegular2)``;

export const ButtonBox = styled.View``;

export const Button = styled.TouchableOpacity`
    background-color: ${selectors.slate};
    border-radius: 10;
    padding: 8px 10px;
`;

export const ButtonText = styled(TextRegular2)`
    color: ${selectors.white};
`;
