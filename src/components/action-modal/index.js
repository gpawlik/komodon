// @flow
import * as React from 'react';

import { OverlayModal } from '~/components/overlay-modal';

import { Container, Box } from './styles';

export const ActionModal = ({ children, isModalOpen }) => {
    return (
        <OverlayModal isModalOpen={!!isModalOpen}>
            <Container>
                <Box>{children}</Box>
            </Container>
        </OverlayModal>
    );
};
