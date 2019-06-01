import * as React from 'react';
import { Component, FunctionComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Item, Segment } from 'semantic-ui-react';
import dockerLogo from '../../assets/images/docker-logo.png';
import haproxyLogo from '../../assets/images/haproxy-logo.png';
import jenkinsLogo from '../../assets/images/jenkins-logo.png';
import kafkaLogo from '../../assets/images/kafka-logo.png';
import postgresqlLogo from '../../assets/images/postgresql-logo.png';
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
            <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={haproxyLogo} wrapped ui={false} />
                                <Item.Content>
                                    <Item.Header>HAProxy</Item.Header>
                                    <Item.Description>
                                        WOW
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={jenkinsLogo} wrapped ui={false} />
                                <Item.Content>
                                    <Item.Header>Jenkins</Item.Header>
                                    <Item.Description>
                                        WOW
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={dockerLogo} wrapped ui={false} />
                                <Item.Content>
                                    <Item.Header>Docker</Item.Header>
                                    <Item.Description>
                                        WOW
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={postgresqlLogo} wrapped ui={false} />
                                <Item.Content>
                                    <Item.Header>PostgreSQL</Item.Header>
                                    <Item.Description>
                                        WOW
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={kafkaLogo} wrapped ui={false} />
                                <Item.Content>
                                    <Item.Header>Kafka</Item.Header>
                                    <Item.Description>
                                        WOW
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

const mapStateToProps = (state: RootState): ComponentStateProps => ({});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHomeContainer as HomeContainer };