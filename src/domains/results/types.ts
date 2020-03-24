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
    duration: {
        departure: number;
        _return: number;
        total: number;
    };
    price: number;
    deepLink: string;
    priceLevel: string;
    id: string;
    routes: Array<Route>;
}

export interface ItineraryResult {
    departure: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    flightPrices: {
        cheapest: FlightItem;
        fastest: FlightItem;
        best: FlightItem;
        equivalents: Array<string>;
    };
}

export interface DestinationResult {
    price: number;
    destination: {
        placeId: string;
        placeName: string;
        countryId: string;
        countryName: string;
        subPlaces: Array<string>;
    };
    stops: number;
}

export interface Results {
    id: string;
    currency: string;
    departure: string;
    destination: string;
    itineraryResults?: Array<ItineraryResult>;
    destinationResults?: Array<DestinationResult>;
}
