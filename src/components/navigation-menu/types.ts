export interface StateProps {
    isNavigationVisible: boolean;
}

export interface DispatchProps {
    toggleNavigation: ({ isVisible: boolean }) => void;
}

export interface OwnProps {
    navigate: any;
}

export type Props = StateProps & DispatchProps & OwnProps;
