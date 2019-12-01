// @flow
export type StateProps = {
    firstName: string,
    secondName: string,
    location: string,
    isActive: boolean,
};

export type DispatchProps = {
    changeActive: ({| value: boolean |}) => void,
};

export type Props = StateProps & DispatchProps;
