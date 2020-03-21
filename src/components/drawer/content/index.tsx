import * as React from 'react';
import { Animated } from 'react-native';
import AnimatedValue from 'react-native/Libraries/Animated/src/nodes/AnimatedValue';

import animate from './animation';
import { Container } from './styles';

interface Props {
    isVisible: boolean;
    width: number;
    children: React.ReactNode;
    onHide: () => void;
}

interface State {
    isAnimating: boolean;
}

const AnimatedContainer = Animated.createAnimatedComponent(Container);

class DrawerContent extends React.Component<Props, State> {
    animatedValue: AnimatedValue;
    animatedValue = new Animated.Value(-this.props.width);

    state = {
        isAnimating: false,
    };

    componentDidUpdate(prevProps: Props) {
        const { animatedValue } = this;
        const { width, isVisible } = this.props;

        if (isVisible !== prevProps.isVisible) {
            animate({ isVisible, width, animatedValue });
        }
    }

    render() {
        const { animatedValue } = this;
        const { width, children } = this.props;

        return (
            <AnimatedContainer
                style={{
                    transform: [{ translateX: animatedValue }],
                    width,
                }}
                testID="side-drawer"
            >
                {children}
            </AnimatedContainer>
        );
    }
}

export default DrawerContent;
