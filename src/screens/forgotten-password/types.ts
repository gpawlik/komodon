import { sendForgottenPassword, sendNewCredentails } from '~/domains/auth/actions';

export interface DispatchProps {
    sendForgottenPassword: typeof sendForgottenPassword;
    sendNewCredentails: typeof sendNewCredentails;
}

export type Props = DispatchProps;
