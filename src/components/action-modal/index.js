// @flow
import * as React from 'react';

import { OverlayModal } from '~/components/overlay-modal';

import { Container, Box } from './styles';

type Props = $Exact<{
    children: React.Node,
    animationType?: string,
    isModalOpen: boolean,
}>;

export const ActionModal = ({ children, animationType, isModalOpen }: Props) => {
    return (
        <OverlayModal animationType={animationType} isModalOpen={!!isModalOpen}>
            <Container>
                <Box>{children}</Box>
            </Container>
        </OverlayModal>
    );
};
