import { ActionType, DockerContainer, DockerContainerAction, DockerState, EntityType, FindDockerContainer, FindDockerContainersAction, FindDockerContainersActionType } from "../../models";
import { initialDockerState } from "../store/initial-state";

export const reducer = (state: DockerState = initialDockerState, action: DockerContainerAction): DockerState => {
    switch (action.type) {
        case FindDockerContainersActionType.LOADING:
        case FindDockerContainersActionType.SUCCESS:
        case FindDockerContainersActionType.ERROR:
            return find(state, action);
        default:
            return state;
    }
};

const find = (state: DockerState = initialDockerState, action: FindDockerContainersAction): DockerState => {
    switch (action.type) {
        case FindDockerContainersActionType.LOADING: {
            const { containers } = state;
            const { loading } = action;
            return { ...initialDockerState, containers: containers, loading: loading };
        }

        case FindDockerContainersActionType.SUCCESS: {
            let { containers } = state;
            const { payload: findDockerContainers } = action;

            if (findDockerContainers) {
                findDockerContainers.forEach(findDockerContainer => {
                    containers = replaceOrAppend(containers, findDockerContainer);
                });
            }

            return { ...initialDockerState, containers: containers };
        }

        case FindDockerContainersActionType.ERROR: {
            const { containers } = state;
            const { data } = action.error.response;
            const error = { ...data, entityType: EntityType.CONTAINERS, actionType: ActionType.FIND };
            return { ...initialDockerState, containers: containers, error: error };
        }

        default: {
            return state;
        }
    }
};

const replaceOrAppend = (containers: DockerContainer[], findDockerContainer: FindDockerContainer): DockerContainer[] => {
    const container = mapDockerContainer(findDockerContainer);
    const index = containers.map(c => c.id).indexOf(container.id);

    if (index !== -1) {
        containers[index] = container;
    } else {
        containers = containers.concat(container);
    }

    return containers;
};

const mapDockerContainer = (findDockerContainer: FindDockerContainer): DockerContainer => {
    return {
        id: findDockerContainer.Id,
        name: findDockerContainer.Names[0].replace("/", ""),
        state: findDockerContainer.State,
        status: findDockerContainer.Status,
        image: {
            id: findDockerContainer.ImageId,
            name: findDockerContainer.Image
        }
    };
};

