export interface Props {
    value: Array<number>;
    onValueChange: (arg0: Array<number>) => void;
}

export interface State {
    selected: {
        Monday?: boolean;
        Tuesday?: boolean;
        Wednesday?: boolean;
        Thursday?: boolean;
        Friday?: boolean;
        Saturday?: boolean;
        Sunday?: boolean;
    };
    selectedAll: boolean;
}
