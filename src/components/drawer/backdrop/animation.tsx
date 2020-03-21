import { Animated, Easing } from 'react-native';
import AnimatedValue from 'react-native/Libraries/Animated/src/nodes/AnimatedValue';

interface Props {
    isVisible: boolean;
    opacity: AnimatedValue;
}

export default ({ isVisible, opacity }: Props, onAnimationEnd: () => void) =>
    Animated.timing(opacity, {
        toValue: isVisible ? 0.5 : 0,
        easing: Easing.inOut(Easing.quad),
        duration: 200,
        useNativeDriver: true,
    }).start(onAnimationEnd);
