interface Timespan {
    from: string;
    to: string;
}

type DaysOfWeek = Array<number>;

export interface SubscriptionPayload {
    departurePlace: string;
    destinationPlace: string;
    roundTrip: true;
    locale: string;
    departureDates: Timespan;
    returnDates: Timespan;
    daysRange: Timespan;
    departureDaysOfWeek: DaysOfWeek;
    returnDaysOfWeek: DaysOfWeek;
    filter: {
        departureTime: Timespan;
        arrivalTime: Timespan;
        returnDepartureTime: Timespan;
        returnArrivalTime: Timespan;
        stops: number;
    };
}

export interface CreateSubscriptionAction {
    payload: SubscriptionPayload;
}

export interface DeleteSubscriptionAction {
    payload: {
        id: string;
        successCb: () => void;
    };
}

export interface GetSubscriptionHistoryPayload {
    id: string;
}

export interface GetSubscriptionHistoryAction {
    payload: GetSubscriptionHistoryPayload;
}

export interface SubscriptionResult {
    id: string;
    searchCriteria: {
        configuration: { locale: string; currency: string };
        departurePlace: {
            placeId: string;
            placeName: string;
            placeCode: string;
            cityId: string;
            cityName: string;
            countryId: string;
            type: string;
            airports: number;
            subPlaces: Array<string>;
        };
        destinationPlace: {
            placeId: string;
            placeName: string;
            placeCode: string;
            cityId: string;
            cityName: string;
            countryId: string;
            type: string;
            subPlaces: Array<string>;
        };
        roundTrip: boolean;
        departureDates: Timespan;
        returnDates: Timespan;
        daysRange: { from: number; to: number };
        departureDaysOfWeek: DaysOfWeek;
        returnDaysOfWeek: DaysOfWeek;
        searchFilter: {
            departureTime: Timespan;
            arrivalTime: Timespan;
            returnDepartureTime: Timespan;
            returnArrivalTime: Timespan;
            stops: number;
        };
        onePerCity: boolean;
        sort: string;
    };
    url: string;
    description: string;
    creationDate: string;
}

export type SubscriptionResults = Array<SubscriptionResult>;

interface HistoryResult {}

export type HistoryResults = Record<string, HistoryResult>;

export interface GetSubscriptionHistorySuccessPayload {
    id: string;
    result: HistoryResult;
}
