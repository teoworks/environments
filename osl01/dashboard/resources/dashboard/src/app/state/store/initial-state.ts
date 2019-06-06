import { DockerState, NotificationState, RootState } from '../../models';

export const initialNotificationState: NotificationState = {
    notifications: []
};

export const initialDockerState: DockerState = {
    loading: false,
    containers: []
};

export const initialRootState: RootState = {
    notificationState: initialNotificationState,
    dockerState: initialDockerState
};
