// @flow
import * as React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';

import { selectors } from '~/theme/main';
import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

const Touch = styled.TouchableOpacity`
    padding: ${selectors.ss2};
`;

type Props = {
    a11yMessage?: A11yText,
    value: boolean,
    onValueChange: boolean => void,
};

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export class RadioButton extends React.Component<Props> {
    render() {
        const { value, onValueChange } = this.props;
        const type = !!value ? generalIcons.SINGLE_CHOICE_ON : generalIcons.SINGLE_CHOICE_OFF;
        const colour = !!value ? selectors.slate : '#bbb';
        return (
            <Touch onPress={() => onValueChange(!value)} hitSlop={hitSlop}>
                <SVGIcon type={type} colour={colour} />
            </Touch>
        );
    }
}
