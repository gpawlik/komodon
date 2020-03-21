import * as React from 'react';

import { OverlayModal } from '~/components/overlay-modal';

import { Container, Box } from './styles';

interface Props {
    children: React.ReactNode;
    animationType?: 'none' | 'slide' | 'fade';
    isModalOpen: boolean;
}

export const ActionModal = React.memo(({ children, animationType, isModalOpen }: Props) => (
    <OverlayModal animationType={animationType} isModalOpen={!!isModalOpen}>
        <Container>
            <Box>{children}</Box>
        </Container>
    </OverlayModal>
));
