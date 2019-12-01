// @flow
import { events } from './response/get-events';

export const fetchGet = (endpoint: string) => {
    switch (endpoint) {
        case 'get-events':
            return JSON.stringify(events);
        default:
            return '[]';
    }
};
