import { DockerContainer, DockerInfo, ToolInfo } from "../../models/types";
import openLdapLogo from "../../assets/images/openldap-logo.png";
import keycloakLogo from "../../assets/images/keycloak-logo.png";
import haproxyLogo from "../../assets/images/haproxy-logo.png";
import jenkinsLogo from "../../assets/images/jenkins-logo.png";
import dockerLogo from "../../assets/images/docker-logo.png";
import postgresqlLogo from "../../assets/images/postgresql-logo.png";
import oracleLogo from "../../assets/images/oracle-logo.png";
import kafkaLogo from "../../assets/images/kafka-logo.png";
import { ContainerState } from "../../models/constants";
import { SemanticCOLORS } from "semantic-ui-react";

export const toolInfoList: ToolInfo[] = [
    {
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
        name: 'ldap',
        title: 'OpenLDAP',
        image: openLdapLogo,
        links: [
            {
                label: 'Host',
                title: 'ldap.osl.teoworks.com',
            },
            {
                label: 'Port',
                title: '389',
            },
            {
                label: 'TLS Port',
                title: '636',
            }
        ]
    },
    {
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
                title: 'jdbc:postgresql://[Host]:[Port]/[Database]',
            }
        ]
    },
    {
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
                title: 'jdbc:oracle:thin:@[Host]:[Port]:XE',
            }
        ]
    },
    {
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
    },
    {
        name: 'keycloak',
        title: 'Keycloak',
        image: keycloakLogo,
        links: [
            {
                label: 'Keycloak',
                title: 'keycloak.osl.teoworks.com',
                href: 'http://keycloak.osl.teoworks.com',
                external: true
            }
        ]
    }
];

export const getDockerInfo = (container: DockerContainer): DockerInfo => {
    const { name, state, status } = container;

    if (state === ContainerState.RUNNING) {
        return mapDockerInfo(name, state, 'green', status);
    } else if (state === ContainerState.STOPPED) {
        return mapDockerInfo(name, state, 'red', status);
    } else {
        return mapDockerInfo(name, state, 'grey', status);
    }
};

export const mapDockerInfo = (name: string, state: ContainerState, color: SemanticCOLORS, status: string): DockerInfo => {
    return {
        name: name,
        stateColor: color,
        stateText: state.toString().toUpperCase(),
        statusText: status
    };
};
