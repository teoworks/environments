import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { PrimaryHeader, SecondaryHeader } from '../../components';

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
                <SecondaryHeader />
            </Container>
        );
    }
}

const mapStateToProps = (state: RootState): ComponentStateProps => ({});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({});

const ConnectedHomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export { ConnectedHomeContainer as HomeContainer };