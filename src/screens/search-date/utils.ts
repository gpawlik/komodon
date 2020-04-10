import * as R from 'ramda';
import moment from 'moment-timezone';

import { days } from '~/constants';

const getDayText = (array, index) => {
    let letters = 0;

    if (array.length < 5) {
        letters = 3;
    } else if (array.length < 6 || [1, 3, 5, 6].includes(index)) {
        letters = 2;
    } else {
        letters = 1;
    }

    return days[index].slice(0, letters);
};

export const getDescriptiveName = ({ type, value }) => {
    switch (type) {
        case 'DEP_TIME_CAL':
        case 'RET_TIME_CAL':
        case 'TIME_CAL': {
            if (!value.from) return '';

            return value.from === value.to || !value.to
                ? moment(value.from).format('MMM, Do')
                : `${moment(value.from).format('MMM, Do')} - ${moment(value.to).format('MMM, Do')}`;
        }

        case 'DEP_TIME_DAYS':
        case 'RET_TIME_DAYS':
        case 'TIME_DAYS':
            return R.cond([
                [R.equals(1), R.always(`Any ${days[value[0]]}`)],
                [R.equals(7), R.always('Any day of week')],
                [
                    R.T,
                    R.always(
                        value
                            .sort()
                            .map(index => getDayText(value, index))
                            .join(', '),
                    ),
                ],
            ])(value.length);

        case 'RET_TIME_RANGE':
        case 'TIME_RANGE':
            return value.from === value.to || !value.to
                ? `Ìn ${value.from} days`
                : `In ${value.from} to ${value.to} days`;

        default:
            return '';
    }
};
