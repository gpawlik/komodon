export interface SubscriptionPayload {
    departurePlace: string;
    destinationPlace: string;
    roundTrip: true;
    locale: string;
    departureDates: {
        from: string;
        to: string;
    };
    returnDates: {
        from: string;
        to: string;
    };
    daysRange: {
        from: number;
        to: number;
    };
    departureDaysOfWeek: Array<number>;
    returnDaysOfWeek: Array<number>;
    filter: {
        departureTime: {
            from: string;
            to: string;
        };
        arrivalTime: {
            from: string;
            to: string;
        };
        returnDepartureTime: {
            from: string;
            to: string;
        };
        returnArrivalTime: {
            from: string;
            to: string;
        };
        stops: number;
    };
}

export interface CreateSubscriptionAction {
    payload: SubscriptionPayload;
}
