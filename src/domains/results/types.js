// @flow
export type Route = {
    departureTime: string,
    arrivalTime: string,
    departureIata: string,
    returnIata: string,
    duration: string,
    numStops: number,
    stops: Array<number>,
    airlines: Array<string>,
};

export type FlightItem = {
    duration: {
        departure: number,
        _return: number,
        total: number,
    },
    price: number,
    deepLink: string,
    priceLevel: string,
    id: string,
    routes: Array<Route>,
};

export type ItineraryResult = {
    departure: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    flightPrices: {
        cheapest: FlightItem,
        fastest: FlightItem,
        best: FlightItem,
        equivalents: Array<string>,
    },
};

export type Results = {
    id: string,
    currency: string,
    departure: string,
    destination: string,
    itineraryResults: Array<ItineraryResult>,
};
