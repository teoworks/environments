import { SemanticCOLORS } from 'semantic-ui-react';
import dockerLogo from '../../assets/images/docker-logo.png';
import haproxyLogo from '../../assets/images/haproxy-logo.png';
import jenkinsLogo from '../../assets/images/jenkins-logo.png';
import kafkaLogo from '../../assets/images/kafka-logo.png';
import keycloakLogo from '../../assets/images/keycloak-logo.png';
import mysqlLogo from '../../assets/images/mysql-logo.png';
import openLdapLogo from '../../assets/images/openldap-logo.png';
import oracleLogo from '../../assets/images/oracle-logo.png';
import postgresqlLogo from '../../assets/images/postgresql-logo.png';
import { ContainerState } from '../../models/constants';
import { DockerContainer, DockerInfo, ToolInfo } from '../../models/types';

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
                title: 'ldap.osl.teoworks.com'
            },
            {
                label: 'Port',
                title: '389'
            },
            {
                label: 'TLS Port',
                title: '636'
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
                title: 'postgres.osl.teoworks.com'
            },
            {
                label: 'Port',
                title: '5432'
            },
            {
                label: 'URL',
                title: 'jdbc:postgresql://postgres.osl.teoworks.com:5432/[Database]'
            }
        ]
    },
    {
        name: 'mysql',
        title: 'MySQL Database',
        image: mysqlLogo,
        links: [
            {
                label: 'Host',
                title: 'mysql.osl.teoworks.com'
            },
            {
                label: 'Port',
                title: '3306'
            },
            {
                label: 'URL',
                title: 'jdbc:mysql://mysql.osl.teoworks.com:3306/[Database]'
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
                title: 'oracle.osl.teoworks.com'
            },
            {
                label: 'Port',
                title: '1521'
            },
            {
                label: 'URL',
                title: 'jdbc:oracle:thin:@oracle.osl.teoworks.com:1521:XE'
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
                title: 'kafka.osl.teoworks.com'
            },
            {
                label: 'Port',
                title: '9092'
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
            },
            {
                label: 'Keycloak OIDC Config',
                title: 'keycloak.osl.teoworks.com/auth/realms/teoworks/.well-known/openid-configuration',
                href: 'http://keycloak.osl.teoworks.com/auth/realms/teoworks/.well-known/openid-configuration',
                external: true
            }
        ]
    }
];

export const getDockerInfo = (container: DockerContainer): DockerInfo => {
    const { names, state, status } = container;
    const name = names[0];

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