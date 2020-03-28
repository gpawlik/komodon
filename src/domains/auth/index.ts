import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_ERROR } from './actions';

interface State {
    isLoggedIn: boolean;
    hasError: boolean;
    username: string;
    email: string;
    emailVerified: boolean;
    idToken: string;
}

export const initialState: State = {
    isLoggedIn: false,
    hasError: false,
    username: '',
    email: '',
    emailVerified: false,
    idToken: '',
};

export const authReducer = (state: State = initialState, action) => {
    switch (action.type) {
        case LOGIN_ATTEMPT: {
            return initialState;
        }

        case LOGIN_SUCCESS: {
            const { attributes, signInUserSession } = action.payload || {};
            return {
                ...state,
                username: attributes?.name,
                email: attributes?.email,
                emailVerified: attributes?.email_verified,
                idToken: signInUserSession?.idToken?.jwtToken,
                isLoggedIn: true,
                hasError: false,
            };
        }

        case LOGIN_ERROR: {
            return {
                ...initialState,
                hasError: true,
            };
        }

        default:
            return state;
    }
};
