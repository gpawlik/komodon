export const alertTypes = {
    DEVICE_OFFLINE: 'DEVICE_OFFLINE',
    LOGIN_NOT_EXISTS: 'UserNotFoundException',
    LOGIN_INCORRECT: 'NotAuthorizedException',
    REGISTER_USER_EXISTS: 'UsernameExistsException',
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
    [alertTypes.GENERAL]: {
        message: 'Something went wrong. Please try again later',
        type: alertCategories.ERROR,
    },
};
