import { combineReducers } from 'redux';

import { RootState } from '../../models';
import * as notifications from './notifications';

const {reducer: notificationsReducer} = notifications;

export const rootReducer = combineReducers<RootState>({
    notificationState: notificationsReducer
});