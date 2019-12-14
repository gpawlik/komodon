// @flow
import * as React from 'react';

import { OverlayModal } from '~/components/overlay-modal';

import { Container, Box } from './styles';

type Props = $Exact<{
    children: React.Node,
    isModalOpen: boolean,
}>;

export const ActionModal = ({ children, isModalOpen }: Props) => {
    return (
        <OverlayModal isModalOpen={!!isModalOpen}>
            <Container>
                <Box>{children}</Box>
            </Container>
        </OverlayModal>
    );
};
