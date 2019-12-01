// @flow
import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { Touch, Icon } from './styles';

type Props = {|
    value: boolean,
    onValueChange: boolean => void,
|};

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export class Checkbox extends React.PureComponent<Props> {
    onValueChange = () => this.props.onValueChange(!this.props.value);

    render() {
        const { value } = this.props;
        return (
            <Touch onPress={this.onValueChange} hitSlop={hitSlop} isOn={value}>
                {value ? <Icon type={generalIcons.TICK} /> : null}
            </Touch>
        );
    }
}
