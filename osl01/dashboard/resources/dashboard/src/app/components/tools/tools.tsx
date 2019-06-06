import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Card, Segment } from "semantic-ui-react";
import { ContainerState, DockerContainer, ToolInfo, ToolOverview } from "../../models";
import { ToolCard } from "./tool";
import haproxyLogo from "../../assets/images/haproxy-logo.png";
import jenkinsLogo from "../../assets/images/jenkins-logo.png";
import dockerLogo from "../../assets/images/docker-logo.png";
import postgresqlLogo from "../../assets/images/postgresql-logo.png";
import oracleLogo from "../../assets/images/oracle-logo.png";
import kafkaLogo from "../../assets/images/kafka-logo.png";

interface ComponentProps {
    containers: DockerContainer[];
}

const toolInfoList: ToolInfo[] = [
    {
        order: 0,
        name: 'haproxy',
        title: 'HAProxy',
        image: haproxyLogo,
        links: [
            {
                label: 'Monitoring',
                title: 'osl.teoworks.com/monitoring',
                href: 'http://osl.teoworks.com/monitoring',
                external: true
            }
        ]
    },
    {
        order: 1,
        name: 'jenkins',
        title: 'Jenkins',
        image: jenkinsLogo,
        links: [
            {
                label: 'Jenkins',
                title: 'jenkins.osl.teoworks.com',
                href: 'http://jenkins.osl.teoworks.com',
                external: true
            }
        ]
    },
    {
        order: 2,
        name: 'docker_registry',
        title: 'Docker',
        image: dockerLogo,
        links: [
            {
                label: 'Docker Registry',
                title: 'docker.osl.teoworks.com',
                href: 'http://docker.osl.teoworks.com',
                external: true
            },
            {
                label: 'Portainer',
                title: 'portainer.osl.teoworks.com',
                href: 'http://portainer.osl.teoworks.com',
                external: true
            }
        ]
    },
    {
        order: 3,
        name: 'postgres',
        title: 'PostgreSQL Database',
        image: postgresqlLogo,
        links: [
            {
                label: 'Host',
                title: 'postgres.osl.teoworks.com',
            },
            {
                label: 'Port',
                title: '5432',
            },
            {
                label: 'URL',
                title: 'jdbc:postgresql://postgres.osl.teoworks.com:5432/<database>',
            }
        ]
    },
    {
        order: 4,
        name: 'oracle-xe',
        title: 'Oracle XE 18c Database',
        image: oracleLogo,
        links: [
            {
                label: 'Host',
                title: 'oracle.osl.teoworks.com',
            },
            {
                label: 'Port',
                title: '1521',
            },
            {
                label: 'URL',
                title: 'jdbc:oracle:thin:@oracle.osl.teoworks.com:1521:XE',
            }
        ]
    },
    {
        order: 5,
        name: 'kafka',
        title: 'Apache Kafka',
        image: kafkaLogo,
        links: [
            {
                label: 'Host',
                title: 'kafka.osl.teoworks.com',
            },
            {
                label: 'Port',
                title: '9092',
            }
        ]
    }
];

class ToolsOverviewComponent extends Component<ComponentProps> {

    public render(): ReactNode {
        const { containers } = this.props;
        const tools = containers
            .map(this.getToolOverview)
            .sort((n1, n2) => {
                if (n1 && n2) {
                    return n1 > n2 ? 1 : -1;
                }
                return 0;
            });

        return (
            <Segment basic className='main-content'>
                <Card.Group itemsPerRow={3}>
                    {tools.map((tool, index) => <ToolCard key={index} tool={tool} />)}
                </Card.Group>
            </Segment>
        );
    }

    private getToolOverview(container: DockerContainer): ToolOverview | undefined {
        const { name, state, status } = container;
        const toolInfo = toolInfoList.find(t => t.name === name);

        if (!toolInfo) {
            return undefined;
        } else if (state === ContainerState.RUNNING) {
            return {
                ...toolInfo,
                stateColor: 'green',
                stateText: 'RUNNING',
                statusText: status
            };
        } else if (state === ContainerState.STOPPED) {
            return {
                ...toolInfo,
                stateColor: 'red',
                stateText: 'STOPPED',
                statusText: status
            };
        } else {
            return {
                ...toolInfo,
                stateColor: 'grey',
                stateText: 'UNKNOWN',
                statusText: status
            };
        }
    }
}

export { ToolsOverviewComponent as ToolsOverview };
