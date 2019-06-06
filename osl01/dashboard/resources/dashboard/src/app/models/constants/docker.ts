export enum ContainerState {
    RUNNING = 'running',
    STOPPED = 'stopped'
}

export enum FindDockerContainersActionType {
    LOADING = '[containers] FIND LOADING',
    SUCCESS = '[containers] FIND SUCCESS',
    ERROR = '[containers] FIND ERROR'
}
