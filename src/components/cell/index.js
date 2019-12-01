// @flow
import * as React from 'react';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2, TextMedium2, TextRegular3, TextMedium3 } from '~/components/text';
import { Checkbox } from '~/components/checkbox';

import { Container, RowContainer } from './styles';

type TextProps = {
    title: $npm$ReactIntl$MessageDescriptor | string,
    description?: $npm$ReactIntl$MessageDescriptor | string,
};

type CellProps = TextProps & {
    hasKeyline?: boolean,
    onPress: () => void | Promise<*>,
};

type ValueCellProps = TextProps & {
    value: boolean,
    hasKeyline?: boolean,
    onPress: () => void,
};

export const Cell = ({ title, description, hasKeyline, onPress }: CellProps) => (
    <Container onPress={onPress} hasKeyline={hasKeyline}>
        <TextMedium2 message={title} />
        {description ? <TextRegular2 message={description} /> : null}
    </Container>
);

export const CheckboxCell = ({ title, value, hasKeyline, onPress }: ValueCellProps) => (
    <RowContainer onPress={onPress} hasKeyline={hasKeyline}>
        <TextRegular3 message={title} />
        <Checkbox value={value} onValueChange={onPress} />
    </RowContainer>
);

export const SelectionCell = ({ title, value, hasKeyline, onPress }: ValueCellProps) => (
    <RowContainer onPress={onPress} hasKeyline={hasKeyline}>
        <TextMedium3>{title}</TextMedium3>
        <TextRegular3>{value}</TextRegular3>
    </RowContainer>
);
