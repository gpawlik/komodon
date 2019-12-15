// @flow
export type StateProps = {
    resultsByPrice: Array<*>,
    resultsByDuration: Array<*>,
    isLoading: boolean,
};

type OwnProps = {
    navigation: any,
};

export type Props = { ...StateProps, ...OwnProps };

export type State = {
    type: number,
    isSubscriptionVisible: boolean,
    isModalOpen: boolean,
};
