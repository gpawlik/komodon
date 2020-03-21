import * as React from 'react';
import { withNavigation } from 'react-navigation';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';
import { IconContainer } from '../styles';

interface Props {
    backIcon?: string;
    backAction?: () => Promise<any> | void;
}

export class BackButtonComponent extends React.PureComponent<Props> {
    goBack = () => {
        const { backAction, navigation } = this.props;
        return typeof backAction === 'function' ? backAction() : navigation.goBack();
    };

    render() {
        const { backIcon = generalIcons.ARROW_LEFT } = this.props;

        return (
            <IconContainer onPress={this.goBack} testID="header.button">
                <SVGIcon type={backIcon} size={16} />
            </IconContainer>
        );
    }
}

export const BackButton = withNavigation(BackButtonComponent);
