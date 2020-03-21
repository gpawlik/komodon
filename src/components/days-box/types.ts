export interface Props {
    value: Array<number>;
}

export interface State {
    selected: {
        Monday: boolean;
        Tuesday: boolean;
        Wednesday: boolean;
        Thursday: boolean;
        Friday: boolean;
        Saturday: boolean;
        Sunday: boolean;
    };
    selectedAll: boolean;
}
