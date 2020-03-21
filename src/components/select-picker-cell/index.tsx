import * as React from 'react';
import * as R from 'ramda';

import { SelectionCell } from '~/components/cell';
import { SelectPickerModal } from '~/components/select-picker-modal';

interface Props {
    title: string;
    options: Array<{ value: string | number; label: string }>;
    onValueChange: (arg0: string | number) => void;
    defaultValue: string | number;
}

interface State {
    isModalVisible: boolean;
    selectedValue: string | number;
}

const getLabelFromValue = (options, value) => {
    return R.compose(R.prop('label'), R.find(R.propEq('value', value)))(options);
};

export class SelectPickerCell extends React.Component<Props, State> {
    state = {
        isModalVisible: false,
        selectedValue: this.props.defaultValue,
    };

    onValueChange = (selectedValue: string | number) => {
        this.setState({ selectedValue, isModalVisible: false });
        this.props.onValueChange(selectedValue);
    };

    onClose = () => this.setState({ isModalVisible: false });

    onModalToggle = () => this.setState(state => ({ isModalVisible: !state.isModalVisible }));

    render() {
        const { title, options } = this.props;
        const { selectedValue, isModalVisible } = this.state;

        return (
            <React.Fragment>
                <SelectionCell
                    title={title}
                    value={getLabelFromValue(options, selectedValue)}
                    onPress={this.onModalToggle}
                />
                <SelectPickerModal
                    title={title}
                    options={options}
                    selectedValue={selectedValue}
                    isModalVisible={isModalVisible}
                    onValueChange={this.onValueChange}
                    onClose={this.onClose}
                />
            </React.Fragment>
        );
    }
}
