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

export interface State {
    departurePlace: CitySearch;
    destinationPlace: CitySearch;
    departureDates: Object;
    returnDates: Object;
    roundTrip: boolean;
}

export interface OptionalCriteria {
    departurePlace?: CitySearch;
    destinationPlace?: CitySearch;
    departureDates?: Object;
    returnDates?: Object;
    roundTrip?: boolean;
}
