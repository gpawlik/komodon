import * as React from 'react';

import { Container } from './styles';

interface Props {
    children: React.ReactNode;
    isFixed?: boolean;
}

export const ConfirmBox = ({ children, isFixed }: Props) => <Container isFixed={!!isFixed}>{children}</Container>;
