import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Container } from 'semantic-ui-react';
import { PrimaryHeader, SecondaryHeader, Tabs } from '../../components';

class HomeContainer extends Component {

    public render(): ReactNode {
        return (
            <Container>
                <PrimaryHeader />
                <SecondaryHeader />
                <Tabs />
            </Container>
        );
    }
}

export { HomeContainer };