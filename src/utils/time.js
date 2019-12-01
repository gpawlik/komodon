// @flow
const DAY = 24 * 60 * 60 * 1000;

export const getTimeBoundaries = (slot: number) => {
    const now = new Date().getTime();
    let numberOfDays;

    switch (slot) {
        case 1:
            numberOfDays = 3;
            break;
        case 2:
            numberOfDays = 7;
            break;
        case 3:
            numberOfDays = 14;
            break;
        default:
            numberOfDays = 30;
    }

    return [now, now + numberOfDays * DAY];
};
