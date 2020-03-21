export interface Action {
    type: string;
    payload: any;
    error?: boolean;
}

export interface ChangeActivePayload {
    value: boolean;
}
