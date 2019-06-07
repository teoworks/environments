export enum ContainerState {
    RUNNING = 'running',
    STOPPED = 'stopped',
    UNKNOWN = 'unknown'

}

export enum FindDockerContainersActionType {
    LOADING = '[containers] FIND LOADING',
    SUCCESS = '[containers] FIND SUCCESS',
    ERROR = '[containers] FIND ERROR'
}
