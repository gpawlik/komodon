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
