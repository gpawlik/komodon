// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Header } from '~/components/header';

import { Container, Content, ScrollContent } from './styles';

type Props = {|
    children: React.Node,
    title: $npm$ReactIntl$MessageDescriptor,
    backIcon?: string,
    hideHeader?: boolean,
    isFullWidth?: boolean,
    hasContentScroll?: boolean,
    backAction?: () => Promise<*>,
|};

export const Screen = ({ children, title, backIcon, backAction, hideHeader, isFullWidth, hasContentScroll }: Props) => {
    const ViewContent = hasContentScroll ? ScrollContent : Content;

    return (
        <Container>
            {!hideHeader ? <Header title={title} backIcon={backIcon} backAction={backAction} /> : null}
            <ViewContent isFullWidth={isFullWidth}>{children}</ViewContent>
        </Container>
    );
};
