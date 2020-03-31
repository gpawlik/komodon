export interface StateProps {
    isNavigationVisible: boolean;
    isLoggedIn: boolean;
}

export interface DispatchProps {
    toggleNavigation: ({ isVisible: boolean }) => void;
    logout: () => void;
}

export interface OwnProps {
    navigate: any;
}

export type Props = StateProps & DispatchProps & OwnProps;
