import { LoginPayload, SignupPayload } from '~/domains/auth/types';

export interface StateProps {
    subscriptions: Array<any>;
}

export interface DispatchProps {
    loginAttempt: (arg0: LoginPayload) => void;
    signupAttempt: (arg0: SignupPayload) => void;
}

interface OwnProps {
    navigation: any;
}

export type Props = StateProps & DispatchProps & OwnProps;
