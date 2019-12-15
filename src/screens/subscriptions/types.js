// @flow
export type StateProps = {
    subscriptions: Array<*>,
};

type OwnProps = {
    navigation: any,
};

export type Props = { ...StateProps, ...OwnProps };

export type State = {
    type: number,
};
