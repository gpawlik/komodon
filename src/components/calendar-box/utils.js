// @flow
import moment from 'moment-timezone';
import { extendMoment } from 'moment-range';

const configDateFormat = 'YYYY-MM-DD';
const momentRange = extendMoment(moment);

type Props = {
    from: string,
    to?: string,
};

export const convertRangeToMarked = ({ from, to }: Props) => {
    if (!to) {
        return {
            [from]: { color: '#00cec9', textColor: '#fff', selected: true, startingDay: true, endingDay: true },
        };
    }
    const startMoment = moment(from);
    const endMoment = moment(to);

    const range = momentRange
        .range(startMoment, endMoment)
        .snapTo('day')
        .by('days');
    const arr = Array.from(range).map(date => moment(date).format(configDateFormat));

    return arr.reduce(
        (acc, item, idx) => ({
            ...acc,
            [item]: {
                color: '#00cec9',
                textColor: 'white',
                selected: true,
                startingDay: idx === 0,
                endingDay: idx === arr.length - 1,
            },
        }),
        {},
    );
};

export const convertMarkedToRange = marked => {
    const keys = Object.keys(marked);
    const from = keys[0];
    const to = keys[keys.length - 1];

    return { from, to };
};
