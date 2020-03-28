export interface StateProps {
    isLoggedIn: boolean;
    username: string;
}

export interface DispatchProps {
    toggleNavigation: ({ isVisible: boolean }) => void;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;
