import { NotificationState, RootState } from '../../models';

export const initialNotificationState: NotificationState = {
    notifications: []
};

export const initialRootState: RootState = {
    notificationState: initialNotificationState
};