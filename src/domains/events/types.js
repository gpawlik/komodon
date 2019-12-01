// @flow
import type { Coordinates } from '~/domains/filters/types';

export type Event = {
    id: number,
    title: string,
    description: string,
    location: string,
    timestamp: number,
    content: string,
};

export type RequestFilters = {
    categories: Array<string>,
    minTime: number,
    maxTime: number,
};

export type RequestEvents = {
    filters: RequestFilters,
    coordinates: Coordinates,
};
