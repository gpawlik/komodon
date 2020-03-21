import * as React from 'react';

import { PickerModal } from './modal';
import { Picker } from './picker';

import { OptionType } from './types';

export interface Props {
    selectedValue: string | number;
    initialValueIndex?: number;
    onValueChange: (arg0: string | number, arg1: number) => void;
    options: Array<OptionType>;
    isModalVisible: boolean;
    title: string | string;
    onClose: () => void;
}

export interface State {
    selectedValue: string | number;
    selectedItemIndex: number;
}

export class SelectPickerModal extends React.Component<Props, State> {
    state = {
        selectedValue: this.props.selectedValue || this.props.options[0].value,
        selectedItemIndex: this.props.initialValueIndex || 0,
    };

    onValueChange = (itemValue: string | number, itemIndex: number) => {
        this.setState({ selectedValue: itemValue, selectedItemIndex: itemIndex });
    };

    onSave = () => this.props.onValueChange(this.state.selectedValue, this.state.selectedItemIndex);

    render() {
        const { title, options, isModalVisible, onClose } = this.props;
        const { selectedValue } = this.state;

        return (
            <PickerModal isModalVisible={isModalVisible} title={title} onSave={this.onSave} onClose={onClose}>
                <Picker selectedValue={selectedValue} onValueChange={this.onValueChange} options={options} />
            </PickerModal>
        );
    }
}
