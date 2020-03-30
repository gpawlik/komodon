import { sendForgottenPassword, sendNewCredentails } from '~/domains/auth/actions';

export interface DispatchProps {
    sendForgottenPassword: typeof sendForgottenPassword;
    sendNewCredentails: typeof sendNewCredentails;
}

interface OwnProps {
    navigation: any;
}

export type Props = DispatchProps & OwnProps;
