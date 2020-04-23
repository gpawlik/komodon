import * as React from 'react';
import ReactDOM from 'react-dom';
import { TouchableWithoutFeedback } from 'react-native';

import { WebModalContainer as ModalContainer, WebModalContent as ModalContent } from './styles';

type WebModalProps = {
    children: React.ReactElement;
    rootId: string;
};

type OverlayModalProps = {
    isModalOpen: boolean;
    zIndex?: number;
    children: React.ReactElement;
    onRequestClose?: () => void;
    rootId?: string;
};

class WebModal extends React.PureComponent<WebModalProps> {
    el = document.createElement('div');
    modalRoot = document.getElementById(this.props.rootId);

    componentDidMount() {
        this.modalRoot && this.modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modalRoot && this.modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export const OverlayModal = ({ isModalOpen, zIndex, children, onRequestClose, rootId = 'root' }: OverlayModalProps) => (
    <WebModal rootId={rootId}>
        <ModalContainer isModalOpen={isModalOpen} zIndex={zIndex}>
            <TouchableWithoutFeedback onPress={onRequestClose} accessible={false}>
                <ModalContent>{children}</ModalContent>
            </TouchableWithoutFeedback>
        </ModalContainer>
    </WebModal>
);
