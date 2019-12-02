// @flow
import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { StyledInput } from './styles';

type Props = {|
    value: string,
    onValueChange: boolean => void,
|};

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export class Input extends React.PureComponent<Props> {
    render() {
        const { value, onValueChange } = this.props;
        return <StyledInput onChangeText={onValueChange} value={value}></StyledInput>;
    }
}
