import { ActionType, DockerState, EntityType, NotificationState } from '../';

export interface RootState {
    notificationState: NotificationState;
    dockerState: DockerState;
}

export interface Error {
    entityType: EntityType;
    actionType: ActionType;
    timestamp: string;
    status: number;
    error: string;
    message: string;
    path: string;
}

export interface Modified {
    id: string;
    entityType: EntityType;
    actionType: ActionType;
}

export interface Entity {
    created: string;
    modified: string;
    loaded?: number;
}

export interface FormElementData {
    formElementError: boolean;
    formElementValue: string;
}

export interface FormData {
    formSubmitted: boolean;
    formError: boolean;
    formErrorMessage?: string;
}

export const unknownError = {
    data: {
        message: 'Unknown error occurred'
    }
};
