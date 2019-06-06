import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { LoadingIndicator, PrimaryHeader, SecondaryHeader, ToolsOverview } from '../../components';
import { DockerState, RootState } from '../../models';
import { findDockerContainers } from "../../state/actions";

interface ComponentStateProps {
    dockerState: DockerState;
}

interface ComponentDispatchProps {
    findDockerContainers: () => Promise<any>;
}


type ComponentProps = ComponentDispatchProps & ComponentStateProps;

class HomeContainer extends Component<ComponentProps> {


    public componentDidMount(): void {
        this.props.findDockerContainers();
    }

    public render(): ReactNode {
        const { loading, containers } = this.props.dockerState;

        if (loading) {
            return (
                <LoadingIndicator />
            );
        } else {
            return (
                <Container>
                    <PrimaryHeader />
                    <SecondaryHeader />
                    <ToolsOverview containers={containers} />
                </Container>
            );
        }
    }
}

const mapStateToProps = (state: RootState): ComponentStateProps => ({
    dockerState: state.dockerState
});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({
    findDockerContainers: () => dispatch(findDockerContainers())
});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHomeContainer as HomeContainer };