import { createAction } from 'redux-actions';

const prefix = 'komodon/user';
export const changeActive = createAction(`${prefix}/CHANGE_ACTIVE`);
