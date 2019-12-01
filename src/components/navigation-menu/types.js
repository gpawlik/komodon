// @flow
export type StateProps = {
    isNavigationVisible: boolean,
};

export type DispatchProps = {
    toggleNavigation: ({ isVisible: boolean }) => void,
};

export type Props = StateProps & DispatchProps;
