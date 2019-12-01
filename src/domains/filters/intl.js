// @flow
import { defineMessages } from 'react-intl';

import { categories } from './constants';

export const messages = defineMessages({
    title: {
        id: 'filters.title',
        defaultMessage: 'Filters',
    },
    categoryTitle: {
        id: 'filters.category.title',
        defaultMessage: 'Category',
    },
    timeTitle: {
        id: 'filters.time.title',
        defaultMessage: 'Time',
    },
    buttonSave: {
        id: 'filters.button.save',
        defaultMessage: 'Apply filters',
    },
    [categories.ENVIRONMENT]: {
        id: 'filters.category.environment',
        defaultMessage: 'Environment',
    },
    [categories.ANIMALS]: {
        id: 'filters.category.animals',
        defaultMessage: 'Animals',
    },
    [categories.SOCIAL]: {
        id: 'filters.category.social',
        defaultMessage: 'Social',
    },
    [categories.EDUCATION]: {
        id: 'filters.category.education',
        defaultMessage: 'Education',
    },
});
