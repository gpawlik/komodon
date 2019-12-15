// @flow
import * as React from 'react';

import { OverlayModal } from '~/components/overlay-modal';

import { Container, Box } from './styles';

type Props = $Exact<{
    children: React.Node,
    animationType?: string,
    isModalOpen: boolean,
}>;

export const ActionModal = React.memo(({ children, animationType, isModalOpen }: Props) => (
    <OverlayModal animationType={animationType} isModalOpen={!!isModalOpen}>
        <Container>
            <Box>{children}</Box>
        </Container>
    </OverlayModal>
));
