export interface Route {
    departureTime: string;
    arrivalTime: string;
    departureIata: string;
    returnIata: string;
    duration: string;
    numStops: number;
    stops: Array<string>;
    airlines: Array<string>;
}

export interface FlightItem {
    id: string;
    price: number;
    quality: number;
    duration: {
        departure: number;
        _return: number;
        total: number;
    };
    deepLink: string;
    routes: Array<Route>;
    flags: Array<string>;
}

export interface Place {
    placeId: string;
    placeName: string;
    placeCode: string;
    cityId: string;
    cityName: string;
    countryId: string;
    countryName: string;
    type: string;
    airports: number;
    subPlaces: Array<string>;
}

export interface ItineraryResult {
    departure: Place;
    destination: Place;
    departureDate: string;
    returnDate: string;
    flightResults: Array<FlightItem>;
}

export interface Results {
    id: string;
    currency: string;
    departure: string;
    destination: string;
    itineraryResults?: Array<ItineraryResult>;
}
