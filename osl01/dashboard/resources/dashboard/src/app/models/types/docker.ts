import { ContainerState, Error, FindDockerContainersActionType, Modified } from "../";

export interface DockerImage {
    id: string;
    name: string;
}

export interface DockerContainer {
    id: string;
    name: string;
    state: ContainerState;
    status: string;
    image: DockerImage;
}

export interface FindDockerContainer {
    Id: string;
    Names: string[];
    State: ContainerState;
    Status: string;
    Image: string;
    ImageId: string;
}

export interface DockerState {
    loading: boolean;
    containers: DockerContainer[];
    error?: Error;
    modified?: Modified;
}

export interface FindDockerContainersLoadingAction {
    type: FindDockerContainersActionType.LOADING,
    loading: boolean
}

export interface FindDockerContainersSuccessAction {
    type: FindDockerContainersActionType.SUCCESS,
    payload: FindDockerContainer[]
}

export interface FindDockerContainersErrorAction {
    type: FindDockerContainersActionType.ERROR,
    error: any
}

export type FindDockerContainersAction = FindDockerContainersLoadingAction | FindDockerContainersSuccessAction | FindDockerContainersErrorAction;

export type DockerContainerAction = FindDockerContainersAction;
