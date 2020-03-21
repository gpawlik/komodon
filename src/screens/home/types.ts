interface OwnProps {
    navigation: any;
}

export interface DispatchProps {
    toggleNavigation: ({ isVisible: boolean }) => void;
}

export type Props = OwnProps & DispatchProps;
