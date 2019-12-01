// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { selectors } from '~/theme/main';

type State = {
    isLiked: boolean,
};

export class Like extends React.Component<{}, State> {
    state = {
        isLiked: false,
    };

    handleToggleLike = () => this.setState(state => ({ isLiked: !state.isLiked }));

    render() {
        const { isLiked } = this.state;
        const stroke = isLiked ? selectors.red : selectors.slate;
        const colour = isLiked ? selectors.red : selectors.white;

        return (
            <TouchableOpacity onPress={this.handleToggleLike}>
                <SVGIcon type={generalIcons.HEART} size={30} stroke={stroke} colour={colour} />
            </TouchableOpacity>
        );
    }
}
