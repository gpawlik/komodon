// @flow
import * as React from 'react';
import { Animated, TouchableWithoutFeedback, BackHandler } from 'react-native';
import type AnimatedValue from 'react-native/Libraries/Animated/src/nodes/AnimatedValue';

import animate from './animation';
import { Container } from './styles';

type Props = {
    isVisible: boolean,
    onHide: () => void,
};

type State = {
    opacity: AnimatedValue,
    isAnimating: boolean,
};

class Backdrop extends React.Component<Props, State> {
    state = {
        opacity: new Animated.Value(0),
        isAnimating: false,
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.hideDrawer);
    }

    componentWillReceiveProps = (nextProps: Props) => {
        const { opacity } = this.state;

        if (this.props.isVisible !== nextProps.isVisible) {
            this.setState(
                { isAnimating: true },
                animate({ isVisible: nextProps.isVisible, opacity }, () => this.setState({ isAnimating: false }))
            );
        }

        // When it becomes visible, hijack the back button press to close the drawer
        if (!this.props.isVisible && nextProps.isVisible) {
            BackHandler.addEventListener('hardwareBackPress', this.hideDrawer);
        }

        if (this.props.isVisible && !nextProps.isVisible) {
            BackHandler.removeEventListener('hardwareBackPress', this.hideDrawer);
        }
    };

    hideDrawer = () => this.props.onHide();

    render() {
        const { isVisible, onHide } = this.props;
        const { opacity, isAnimating } = this.state;
        const AnimatedContainer = Animated.createAnimatedComponent(Container);

        return isVisible || (!isVisible && isAnimating) ? (
            <TouchableWithoutFeedback onPress={onHide}>
                <AnimatedContainer style={{ opacity }} />
            </TouchableWithoutFeedback>
        ) : null;
    }
}

export default Backdrop;
