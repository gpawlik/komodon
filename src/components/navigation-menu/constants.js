// @flow
import * as routes from '~/constants/routes';
import { messages } from './intl';

export const MENU_WIDTH = 272;

export const menuItems = [
    {
        id: 'user-profile',
        message: messages.userProfile,
        route: routes.userInfo,
    },
    {
        id: 'about',
        message: messages.about,
        route: routes.about,
    },
    {
        id: 'create-event',
        message: messages.createEvent,
        route: routes.eventCreate,
    },
];
