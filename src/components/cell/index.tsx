import * as React from 'react';

import { TextRegular2, TextMedium2, TextRegular3, TextMedium3 } from '~/components/text';
import { Checkbox } from '~/components/checkbox';
import { RadioButton } from '~/components/radio-button';

import { Container, RowContainer } from './styles';

interface TextProps {
    title: string | string;
    description?: string | string;
}

type CellProps = TextProps & {
    hasKeyline?: boolean;
    onPress: () => void | Promise<any>;
};

type ValueCellProps = TextProps & {
    value: boolean;
    hasKeyline?: boolean;
    onPress: () => void;
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

export const RadioCell = ({ title, value, hasKeyline, onPress }: ValueCellProps) => (
    <RowContainer onPress={onPress} hasKeyline={hasKeyline}>
        <TextRegular3 message={title} />
        <RadioButton value={value} onValueChange={onPress} />
    </RowContainer>
);

export const SelectionCell = ({ title, value, hasKeyline, onPress }: ValueCellProps) => (
    <RowContainer onPress={onPress} hasKeyline={hasKeyline}>
        <TextMedium3>{title}</TextMedium3>
        <TextRegular3>{value}</TextRegular3>
    </RowContainer>
);
