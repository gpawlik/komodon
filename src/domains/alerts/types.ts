export interface Alert {
    id: string;
    message: string;
    type: string;
}

export interface State {
    alert: Alert;
}
