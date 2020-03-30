export interface LoginPayload {
    username: string;
    password: string;
    successCb: () => void;
}

export interface LoginAction {
    payload: LoginPayload;
}

export interface LoginSuccessPayload {
    username: string;
    authenticationFlowType: string;
    attributes: {
        email: string;
        email_verified: boolean;
        name: string;
        sub: string;
    };
    signInUserSession: {
        refreshToken: {
            token: string;
        };
        idToken: {
            jwtToken: string;
        };
        accessToken: {
            jwtToken: string;
        };
    };
}

export interface SignupPayload {
    username: string;
    email: string;
    password: string;
    successCb: () => void;
}

export interface SignupAction {
    payload: SignupPayload;
}

export interface ForgottenPasswordPayload {
    username: string;
    successCb: (arg0: string) => void;
}

export interface ForgottenPasswordAction {
    payload: ForgottenPasswordPayload;
}

export interface NewCredentialsPayload {
    username: string;
    code: string;
    password: string;
}

export interface NewCredentialsAction {
    payload: NewCredentialsPayload;
}
