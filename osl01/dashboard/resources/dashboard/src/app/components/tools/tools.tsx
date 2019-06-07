import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Card, Segment } from "semantic-ui-react";
import { ContainerState, DockerContainer, ToolOverview } from "../../models";
import { ToolCard } from "./tool";
import { getDockerInfo, mapDockerInfo, toolInfoList } from "./tool-info";

interface ComponentProps {
    containers: DockerContainer[];
}

class ToolsOverviewComponent extends Component<ComponentProps> {

    public render(): ReactNode {
        const tools = this.getToolOverviewList();

        return (
            <Segment basic className='main-content'>
                <Card.Group itemsPerRow={3}>
                    {tools.map((tool, index) => <ToolCard key={index} tool={tool} />)}
                </Card.Group>
            </Segment>
        );
    }

    private getToolOverviewList(): ToolOverview[] {
        const { containers } = this.props;
        const dockerInfoList = containers.map(getDockerInfo);

        return toolInfoList.map(tool => {
            const dockerInfo = dockerInfoList
                    .find(docker => docker.name === tool.name) ||
                mapDockerInfo(tool.name, ContainerState.UNKNOWN, 'grey', 'N/A');

            return {
                ...tool,
                ...dockerInfo
            }
        });
    }
}

export { ToolsOverviewComponent as ToolsOverview };
