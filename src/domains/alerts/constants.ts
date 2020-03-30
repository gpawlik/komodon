export const alertTypes = {
    DEVICE_OFFLINE: 'DEVICE_OFFLINE',
    LOGIN_NOT_EXISTS: 'UserNotFoundException',
    LOGIN_INCORRECT: 'NotAuthorizedException',
    REGISTER_USER_EXISTS: 'UsernameExistsException',
    FORGOT_PASSWORD_CODE_MISMATCH: 'CodeMismatchException',
    FORGOT_PASSWORD_CODE_EXPIRED: 'ExpiredCodeException',
    FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
    ATTEMPT_LIMIT: 'LimitExceededException',
    GENERAL: 'GENERAL',
};

export const alertCategories = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    ERROR: 'ERROR',
};

export const alerts = {
    [alertTypes.DEVICE_OFFLINE]: {
        message: 'Your device is currently offline',
        type: alertCategories.ERROR,
    },
    [alertTypes.LOGIN_NOT_EXISTS]: {
        message: 'This user does not exist in our database',
        type: alertCategories.ERROR,
    },
    [alertTypes.LOGIN_INCORRECT]: {
        message: 'Incorrect username or password',
        type: alertCategories.ERROR,
    },
    [alertTypes.REGISTER_USER_EXISTS]: {
        message: 'User already exists',
        type: alertCategories.ERROR,
    },
    [alertTypes.FORGOT_PASSWORD_CODE_MISMATCH]: {
        message: 'Invalid verification code provided, please try again',
        type: alertCategories.ERROR,
    },
    [alertTypes.FORGOT_PASSWORD_CODE_EXPIRED]: {
        message: 'The verification code has expired, please request a code again',
        type: alertCategories.ERROR,
    },
    [alertTypes.FORGOT_PASSWORD_SUCCESS]: {
        message: 'Your password has been updated, please try to login',
        type: alertCategories.SUCCESS,
    },
    [alertTypes.ATTEMPT_LIMIT]: {
        message: 'Attempt limit exceeded, please try after some time',
        type: alertCategories.ERROR,
    },
    [alertTypes.GENERAL]: {
        message: 'Something went wrong, please try again',
        type: alertCategories.ERROR,
    },
};
