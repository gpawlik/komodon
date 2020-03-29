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

export const formatHours = (value: number): string => {
    if (value >= 24) return '23:59';
    if (value <= 0) return '00:00';
    return value < 10 ? `0${value}:00` : `${value}:00`;
};

export const formatDays = (value: number): string => (value === 1 ? `${value} day` : `${value} days`);

export const formatHourRange = ({ from, to }: { from: number; to: number } = { from: 0, to: 24 }) => ({
    from: formatHours(from),
    to: formatHours(to),
});
