// @flow
import * as React from 'react';
import { Animated, Easing } from 'react-native';
import type { LayoutEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';
import styled from 'styled-components';

import { selectors } from '~/theme/main';
import { OverlayModal } from '~/components/overlay-modal';
import { Button } from '~/components/button';
import { TextMedium3 } from '~/components/text';

import { messages } from '~/i18n/intl';

const ModalContentWrapper = styled.View`
    flex: 1;
    justify-content: flex-end;
    max-width: 400;
    width: 100%;
    align-self: center;
`;

const Title = styled(TextMedium3)`
    align-self: center;
`;

const ModalContent = styled(Animated.View)`
    margin: ${selectors.ss5};
    padding: ${selectors.ss5};
    border-radius: 10px;
    background-color: ${selectors.white};
`;

type Props = {
    isModalVisible: boolean,
    onSave?: () => void,
    onCancel?: () => void,
    children: React.Node,
    title?: string | $npm$ReactIntl$MessageDescriptor,
    onClose: () => void,
};

type State = {
    modalContentHeight: number,
};

export class PickerModal extends React.PureComponent<Props, State> {
    animatedValue = new Animated.Value(0);
    state = {
        modalContentHeight: 0,
    };

    animate(callback?: () => void) {
        const currentAnimatedValue = this.animatedValue.__getValue();

        const toValue = currentAnimatedValue === 0 ? this.state.modalContentHeight : 0;

        Animated.timing(this.animatedValue, {
            easing: Easing.ease,
            toValue,
            duration: 200,
        }).start(callback);
    }

    onLayout = (event: LayoutEvent) => {
        const { height } = event.nativeEvent.layout;

        this.animatedValue.setValue(height);

        this.setState(
            {
                modalContentHeight: height,
            },
            this.animate
        );
    };

    onSave = () => {
        const { onSave, onClose } = this.props;
        const closeAndSave = () => {
            onClose();

            /**
             * HACK: There are times when you want to throw a native alert `onSave`.
             * You cannot open an alert while the modal is closing (causes UI to freeze).
             * The timeout of 0 simply pushes `onSave` around the event loop so
             * it is invoked after the modal is closed
             */
            if (typeof onSave === 'function') {
                setTimeout(onSave, 0);
            }
        };
        this.animate(closeAndSave);
    };

    onClose = () => {
        const { onClose } = this.props;
        this.animate(onClose);
    };

    render() {
        const { title, children, isModalVisible } = this.props;

        const transform = {
            transform: [{ translateY: this.animatedValue }],
            opacity: this.animatedValue.__getValue() || this.state.modalContentHeight ? 1 : 0,
        };

        return (
            <OverlayModal animationType={'none'} isModalOpen={isModalVisible} onRequestClose={this.onClose}>
                <ModalContentWrapper onLayout={this.onLayout}>
                    <ModalContent style={transform}>
                        {title ? <Title>{title}</Title> : null}
                        {children}
                        <Button onPress={this.onSave} message={messages.save} />
                    </ModalContent>
                </ModalContentWrapper>
            </OverlayModal>
        );
    }
}
