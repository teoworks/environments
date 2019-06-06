import { combineReducers } from 'redux';

import { RootState } from '../../models';
import * as notifications from './notifications';
import * as docker from './docker';

const {reducer: notificationsReducer} = notifications;
const {reducer: dockerReducer} = docker;

export const rootReducer = combineReducers<RootState>({
    notificationState: notificationsReducer,
    dockerState: dockerReducer
});