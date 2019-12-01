// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { navigate } from '~/navigation';
import { Screen } from '~/components/screen';
import { generalIcons } from '~/constants/icons/general';

type Props = {|
    children: React.Node,
    title: $npm$ReactIntl$MessageDescriptor,
    isFullWidth?: boolean,
|};

export class Modal extends React.PureComponent<Props> {
    handleBack = () => navigate.dismissModal();

    render() {
        const { children, title, isFullWidth } = this.props;

        return (
            <Screen title={title} backAction={this.handleBack} backIcon={generalIcons.CLOSE} isFullWidth={isFullWidth}>
                {children}
            </Screen>
        );
    }
}
