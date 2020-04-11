import * as React from 'react';

import { Container } from './styles';

interface Props {
    children: React.ReactNode;
}

export const ConfirmBox = ({ children }: Props) => <Container>{children}</Container>;
