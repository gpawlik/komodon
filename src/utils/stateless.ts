import * as React from 'react';
import { Animated } from 'react-native';

export const statelessToClass = (Component: any) => {
    return class ComponentAsClass extends React.PureComponent<any> {
        render() {
            return React.createElement(Component, this.props);
        }
    };
};

export const createAnimatedComponent = (Component: React.ReactNode) =>
    Animated.createAnimatedComponent(statelessToClass(Component));
