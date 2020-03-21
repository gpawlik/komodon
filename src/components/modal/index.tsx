import * as React from 'react';

import { Screen } from '~/components/screen';
import { generalIcons } from '~/constants/icons/general';

interface Props {
    children: React.ReactNode;
    title: string;
    isFullWidth?: boolean;
}

export class Modal extends React.PureComponent<Props> {
    handleBack = () => {};

    render() {
        const { children, title, isFullWidth } = this.props;

        return (
            <Screen title={title} backAction={this.handleBack} backIcon={generalIcons.CLOSE} isFullWidth={isFullWidth}>
                {children}
            </Screen>
        );
    }
}
