import * as R from 'ramda';
import { State as Criteria } from '~/domains/search/types';

const pickNotEmpty = R.pickBy(R.and(R.compose(R.not, R.isEmpty), R.compose(R.not, R.isNil)));

export const getUrlParamsFromCriteria = (criteria: Criteria): string => {
    const {
        departureText,
        returnText,
        departurePlace,
        destinationPlace,
        departureDates,
        returnDates,
        daysRange,
        ...rest
    } = criteria;

    const filtered2 = pickNotEmpty({
        ...rest,
        departurePlace: departurePlace?.placeId,
        destinationPlace: destinationPlace?.placeId,
        departureDateFrom: departureDates?.from,
        departureDateTo: departureDates?.to,
        returnDateFrom: returnDates?.from,
        returnDateTo: returnDates?.to,
        daysRangeFrom: daysRange?.from,
        daysRangeTo: daysRange?.to,
    });

    return new URLSearchParams(filtered2).toString();
};

export const getCriteriaFromUrlParams = (params: string) => {
    const urlParams = new URLSearchParams(params);

    const {
        departurePlace,
        destinationPlace,
        departureDateFrom,
        departureDateTo,
        returnDateFrom,
        returnDateTo,
        departureDaysOfWeek,
        returnDaysOfWeek,
        daysRangeFrom,
        daysRangeTo,
        roundTrip,
        ...rest
        // @ts-ignore
    } = Object.fromEntries(urlParams) || {};

    return pickNotEmpty({
        ...rest,
        departurePlace: {
            placeId: departurePlace,
        },
        destinationPlace: {
            placeId: destinationPlace,
        },
        departureDates: departureDateFrom && {
            from: departureDateFrom,
            to: departureDateTo,
        },
        returnDates: returnDateFrom && {
            from: returnDateFrom,
            to: returnDateTo,
        },
        daysRange: daysRangeFrom && {
            from: daysRangeFrom,
            to: daysRangeTo,
        },
        departureDaysOfWeek: departureDaysOfWeek ? departureDaysOfWeek.split(',').map(Number) : [],
        returnDaysOfWeek: returnDaysOfWeek ? returnDaysOfWeek.split(',').map(Number) : [],
        roundTrip: roundTrip === 'true',
    });
};
