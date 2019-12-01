// @flow
import * as React from 'react';

import { navigate } from '~/navigation';
import { Modal } from '~/components/modal';
import { Button } from '~/components/button';
import { SelectPickerCell } from '~/components/select-picker-cell';

import { messages } from '~/domains/filters/intl';

import { CategoryFilter } from './components/category';

import { ContentBox, ButtonBox } from './styles';
import type { Props, State } from './types';

const options = [
    { value: 1, label: 'Next 3 days' },
    { value: 2, label: 'Next 7 days' },
    { value: 3, label: 'Next 14 days' },
    { value: 4, label: 'Next 30 days' },
];

export class FiltersComponent extends React.PureComponent<Props, State> {
    state = {
        categories: this.props.categories,
        timeSlot: this.props.timeSlot,
    };

    handleOnPress = () => {
        this.props.selectFilter({ filters: this.state });
        navigate.dismissModal();
    };

    onCategoryChange = (category: string) => {
        const { categories } = this.state;
        const index = categories.indexOf(category);

        if (index >= 0) {
            this.setState({ categories: categories.delete(index) });
        } else {
            this.setState({ categories: categories.push(category) });
        }
    };

    onTimePickerChange = (value: string | number) => this.setState({ timeSlot: Number(value) });

    hasFiltersChanged = () => {
        const { categories, timeSlot } = this.props;
        const { categories: currentCategories, timeSlot: currentTimeSlot } = this.state;

        return !categories.sort().equals(currentCategories.sort()) || timeSlot !== currentTimeSlot;
    };

    render() {
        const { categories, timeSlot } = this.state;
        const hasChanged = this.hasFiltersChanged();

        return (
            <Modal title={messages.title} isFullWidth>
                <ContentBox>
                    <CategoryFilter onChange={this.onCategoryChange} categories={categories} />

                    <SelectPickerCell
                        title={messages.timeTitle}
                        options={options}
                        defaultValue={timeSlot}
                        onValueChange={this.onTimePickerChange}
                    />
                </ContentBox>

                <ButtonBox>
                    <Button message={messages.buttonSave} onPress={this.handleOnPress} isDisabled={!hasChanged} />
                </ButtonBox>
            </Modal>
        );
    }
}
