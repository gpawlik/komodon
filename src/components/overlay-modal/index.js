// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { selectors } from '~/theme/main';
import { transparentize } from '~/utils/styles';

type Props = {
    isModalOpen: boolean,
    children: React.Node,
    onRequestClose?: () => void,
    animationType?: 'slide' | 'fade' | 'none', // none is default
};

export const ModalContainer = styled.View`
    background-color: ${transparentize(selectors.slate, 0.5)};
    flex: 1;
`;

export class OverlayModal extends React.Component<Props> {
    render() {
        const { animationType, isModalOpen, onRequestClose, children } = this.props;

        return (
            <Modal animationType={animationType} transparent visible={isModalOpen} onRequestClose={onRequestClose}>
                <TouchableWithoutFeedback onPress={onRequestClose} accessible={false}>
                    <ModalContainer>{children}</ModalContainer>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}
