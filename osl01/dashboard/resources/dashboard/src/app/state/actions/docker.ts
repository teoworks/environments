import { client } from '../../core/client';
import { FindDockerContainer, FindDockerContainersActionType, FindDockerContainersErrorAction, FindDockerContainersLoadingAction, FindDockerContainersSuccessAction } from '../../models';
import { handleError } from '../../providers';
import { showError } from './notifications';

const findDockerContainersLoading = (loading: boolean): FindDockerContainersLoadingAction => ({type: FindDockerContainersActionType.LOADING, loading});
const findDockerContainersSuccess = (payload: FindDockerContainer[]): FindDockerContainersSuccessAction => ({type: FindDockerContainersActionType.SUCCESS, payload});
const findDockerContainersError = (error: any): FindDockerContainersErrorAction => ({type: FindDockerContainersActionType.ERROR, error});

const rootPath = '/v1.39';

export function findDockerContainers() {
    return (dispatch) => {
        dispatch(findDockerContainersLoading(true));
        const url = `${rootPath}/containers/json`;
        return client.get(url)
            .then((response) => {
                return dispatch(findDockerContainersSuccess(response.data));
            })
            .catch((error) => {
                const message = handleError(error);
                dispatch(showError('Error occurred while finding Docker containers', message, true));
                return dispatch(findDockerContainersError(error));
            });
    };
}
