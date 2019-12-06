// @flow
import moment from 'moment-timezone';

import { days } from '~/constants';

export const getDescriptiveName = ({ type, value }) => {
    console.log({ value });
    switch (type) {
        case 'DEP_TIME_CAL':
        case 'RET_TIME_CAL':
            return value.from === value.to
                ? moment(value.from).format('MMM, Do')
                : `${moment(value.from).format('MMM, Do')} - ${moment(value.to).format('MMM, Do')}`;

        case 'DEP_TIME_DAYS':
        case 'RET_TIME_DAYS':
            return value.length === 7
                ? 'Any day of week'
                : value
                      .sort()
                      .map(index => days[index].slice(0, 2))
                      .join(', ');

        case 'RET_TIME_RANGE':
            return value.from === value.to ? `Ìn ${value.from} days` : `In ${value.from} to ${value.to} days`;

        default:
            return '';
    }
};
