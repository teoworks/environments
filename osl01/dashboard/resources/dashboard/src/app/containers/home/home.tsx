import * as React from 'react';
import { Component, FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Image, Segment } from 'semantic-ui-react';
import dockerLogo from '../../assets/images/docker-logo.png';
import haproxyLogo from '../../assets/images/haproxy-logo.png';
import jenkinsLogo from '../../assets/images/jenkins-logo.png';
import kafkaLogo from '../../assets/images/kafka-logo.png';
import postgresqlLogo from '../../assets/images/postgresql-logo.png';
import oracleLogo from '../../assets/images/oracle-logo.png';
import { PrimaryHeader } from '../../components';

import { RootState } from '../../models';

interface ComponentStateProps {
}

interface ComponentDispatchProps {
}

type ComponentProps = ComponentDispatchProps & ComponentStateProps;

interface ComponentState {
}

const initialState: ComponentState = {};

class HomeContainer extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = initialState;
    }

    public render(): ReactNode {
        return (
            <Container>
                <PrimaryHeader />
                <Tools />
            </Container>
        );
    }
}

const Tools: FunctionComponent = () => {
    return (
        <Segment basic className='main-content'>
            <Card.Group itemsPerRow={3}>
                <Card>
                    <Image src={haproxyLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>HAProxy</Card.Header>
                        <Card.Description>
                            <div>
                                Monitoring: <b><a href='http://osl.teoworks.com/monitoring' target='_blank'>osl.teoworks.com/monitoring</a></b>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={jenkinsLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Jenkins</Card.Header>
                        <Card.Description>
                            <div>
                                Jenkins: <b><a href='http://jenkins.osl.teoworks.com' target='_blank'>jenkins.osl.teoworks.com</a></b>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={dockerLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Docker</Card.Header>
                        <Card.Description>
                            <div>
                                Docker Registry: <b><a href='http://docker.osl.teoworks.com' target='_blank'>docker.osl.teoworks.com</a></b>
                            </div>
                            <div>
                                Portainer: <b><a href='http://portainer.osl.teoworks.com' target='_blank'>portainer.osl.teoworks.com</a></b>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={postgresqlLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>PostgreSQL Database</Card.Header>
                        <Card.Description>
                            <div>Host: <b>postgres.osl.teoworks.com</b></div>
                            <div>Port: <b>5432</b></div>
                            <div>URL: <b>jdbc:postgresql://postgres.osl.teoworks.com:5432/<i>&lt;database&gt;</i></b></div>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={oracleLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Oracle XE 18c Database</Card.Header>
                        <Card.Description>
                            <div>Host: <b>oracle.osl.teoworks.com</b></div>
                            <div>Port: <b>1521</b></div>
                            <div>URL: <b>jdbc:oracle:thin:@oracle.osl.teoworks.com:1521:XE</b></div>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={kafkaLogo} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Apache Kafka</Card.Header>
                        <Card.Description>
                            <div>Host: <b>kafka.osl.teoworks.com</b></div>
                            <div>Port: <b>9092</b></div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Segment>
    );
};

const mapStateToProps = (state: RootState): ComponentStateProps => ({});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHomeContainer as HomeContainer };