import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Card, Segment } from 'semantic-ui-react';
import { ContainerState, DockerContainer, DockerState, RootState, ToolOverview } from '../../models';
import { findDockerContainers } from '../../state/actions';
import { LoadingIndicator } from '../indicators';
import { ToolCard } from './tool';
import { getDockerInfo, mapDockerInfo, toolInfoList } from './tool-info';

interface ComponentStateProps {
    dockerState: DockerState;
}

interface ComponentDispatchProps {
    findDockerContainers: () => Promise<any>;
}

type ComponentProps = ComponentDispatchProps & ComponentStateProps;

class ToolsOverviewComponent extends Component<ComponentProps> {

    public componentDidMount(): void {
        this.props.findDockerContainers();
    }

    public render(): ReactNode {
        const {loading, containers} = this.props.dockerState;

        if (loading) {
            return (
                <LoadingIndicator />
            );
        } else {
            const tools = this.getToolOverviewList(containers);

            return (
                <Segment basic>
                    <Card.Group itemsPerRow={5}>
                        {tools.map((tool, index) => <ToolCard key={index} tool={tool} />)}
                    </Card.Group>
                </Segment>
            );
        }
    }

    private getToolOverviewList(containers: DockerContainer[]): ToolOverview[] {
        const dockerInfoList = containers.map(getDockerInfo);

        return toolInfoList.map(tool => {
            const dockerInfo = dockerInfoList
                    .find(docker => docker.name === tool.name) ||
                mapDockerInfo(tool.name, ContainerState.UNKNOWN, 'grey', 'N/A');

            return {
                ...tool,
                ...dockerInfo
            };
        });
    }
}

const mapStateToProps = (state: RootState): ComponentStateProps => ({
    dockerState: state.dockerState
});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({
    findDockerContainers: () => dispatch(findDockerContainers())
});

const ConnectedToolsOverviewComponent = connect(mapStateToProps, mapDispatchToProps)(ToolsOverviewComponent);

export { ConnectedToolsOverviewComponent as ToolsOverview };
