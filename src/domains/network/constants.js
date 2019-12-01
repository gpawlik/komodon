// @flow
export const connectionTypes = {
    NONE: 'none',
    WIFI: 'wifi',
    CELLULAR: 'cellular',
    UNKNOWN: 'unknown',
    BLUETOOTH: 'bluetooth', // Android only
    ETHERNET: 'ethernet', // Android only
    WIMAX: 'wimax', // Android only
};

export const effectiveConnectionTypes = {
    TWO_G: '2G',
    THREE_G: '3G',
    FOUR_G: '4G',
    UNKNOWN: 'unknown',
};
