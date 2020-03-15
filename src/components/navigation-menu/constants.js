// @flow
import * as routes from '~/constants/routes';

export const MENU_WIDTH = 272;

export const menuItems = [
    {
        id: 'user-profile',
        message: 'User Profile',
        route: routes.userInfo,
    },
    {
        id: 'about',
        message: 'About',
        route: routes.about,
    },
];
