const DAY: number = 24 * 60 * 60 * 1000;

export const getTimeBoundaries = (slot: number): Array<number> => {
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

export const formatHours = (value: number): string => (value < 10 ? `0${value}:00` : `${value}:00`);

export const formatDays = (value: number): string => (value === 1 ? `${value} day` : `${value} days`);