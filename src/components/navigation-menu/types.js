// @flow
export type StateProps = {
    isNavigationVisible: boolean,
};

export type DispatchProps = {
    toggleNavigation: ({ isVisible: boolean }) => void,
};

export type OwnProps = {
    navigate: any,
};

export type Props = StateProps & DispatchProps & OwnProps;
