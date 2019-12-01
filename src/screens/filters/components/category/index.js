// @flow
import * as React from 'react';
import { List } from 'immutable';

import { Section } from '~/components/section';
import { CheckboxCell } from '~/components/cell';

import { messages } from '~/domains/filters/intl';
import { categories } from '~/domains/filters/constants';

import type { Props } from './types';

const allCategories = [categories.ENVIRONMENT, categories.ANIMALS, categories.SOCIAL, categories.EDUCATION];

export class CategoryFilter extends React.PureComponent<Props> {
    onCategoryChange = (key: string) => {
        this.props.onChange(key);
    };

    render() {
        const { categories = List() } = this.props;

        return (
            <Section title={messages.categoryTitle}>
                {allCategories.map(item => (
                    <CheckboxCell
                        key={item}
                        title={messages[item]}
                        onPress={() => this.onCategoryChange(item)}
                        value={categories.includes(item)}
                    />
                ))}
            </Section>
        );
    }
}
