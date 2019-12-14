// @flow
export type Props = $Exact<{
    value: Array<number>,
}>;

export type State = $Exact<{
    selected: {
        Monday: boolean,
        Tuesday: boolean,
        Wednesday: boolean,
        Thursday: boolean,
        Friday: boolean,
        Saturday: boolean,
        Sunday: boolean,
    },
    selectedAll: boolean,
}>;
