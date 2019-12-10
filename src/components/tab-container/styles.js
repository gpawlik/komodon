// @flow
import { Platform } from 'react-native';
import styled, { css } from 'styled-components';

export const Outer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: ${props => (props.isLandscape ? 'absolute' : 'relative')};
`;

export const MainSection = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const Scroller = styled.VirtualizedList`
    flex: 1;
    align-self: stretch;
    flex-direction: row;
`;

const webStyles = css`
    height: -webkit-fill-available;
    overflow: scroll;
`;

export const ChildHolder = styled.View`
    align-self: stretch;
    width: ${({ width }) => width};
    ${Platform.OS === 'web' ? webStyles : ''};
`;

export const Tab = styled.View`
    flex: 1;
`;

/**
 * On iOS the scroll view competes with the navigator back gesture swipe, this creates a safe area for back gesture
 */
export const backGestureStripIOSWidth = 20;
export const BackGestureStripIOS = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${backGestureStripIOSWidth};
`;
