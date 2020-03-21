export interface Action {
    type: string;
    payload: any;
    error?: boolean;
}

export interface SelectFilterPayload {
    name: number;
}
