import * as React from 'react';

import Backdrop from './backdrop';
import Content from './content';

interface Props {
    isVisible: boolean;
    width?: number;
    onHide: () => void;
    children: React.ReactNode;
}

export const Drawer = ({ isVisible, onHide, width = 0, children }: Props) => {
    return [
        <Backdrop key="drawer-backdrop" onHide={onHide} isVisible={isVisible} />,
        <Content key="drawer-content" width={width} isVisible={isVisible} onHide={onHide}>
            {children}
        </Content>,
    ];
};
