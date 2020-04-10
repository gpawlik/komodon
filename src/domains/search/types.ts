export interface CitySearch {
    placeId?: string;
    placeName?: string;
    placeCode?: string;
    countryName?: string;
}

export interface ValidatedCriteria {
    departurePlace: boolean;
    destinationPlace: boolean;
    departureDate: boolean;
    returnDate: boolean;
}

interface DateCriteria {
    from?: string;
    to?: string;
}

interface RangeCriteria {
    from?: number;
    to?: number;
}

export interface State {
    departurePlace: CitySearch;
    destinationPlace: CitySearch;
    departureDates: DateCriteria;
    departureDaysOfWeek: Array<string>;
    returnDates: DateCriteria;
    returnDaysOfWeek: Array<string>;
    daysRange: RangeCriteria;
    roundTrip: boolean;
    departureText: string;
    returnText: string;
}

export interface OptionalCriteria {
    departurePlace?: CitySearch;
    destinationPlace?: CitySearch;
    departureDates?: DateCriteria;
    returnDates?: DateCriteria;
    roundTrip?: boolean;
}
