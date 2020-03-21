import * as R from 'ramda';

export const filterEmpty = R.filter(R.complement(R.isEmpty));

export const emailIsValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
