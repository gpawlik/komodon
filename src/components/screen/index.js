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
    qaName?: string,
    backAction?: () => Promise<*>,
|};

export const Screen = ({
    children,
    title,
    backIcon,
    backAction,
    hideHeader,
    isFullWidth,
    hasContentScroll,
    qaName,
}: Props) => {
    const ViewContent = hasContentScroll ? ScrollContent : Content;
    const testProps = qaName ? { testID: `screen.${qaName}` } : {};

    return (
        <Container {...testProps}>
            {!hideHeader ? <Header title={title} backIcon={backIcon} backAction={backAction} /> : null}
            <ViewContent isFullWidth={isFullWidth}>{children}</ViewContent>
        </Container>
    );
};
