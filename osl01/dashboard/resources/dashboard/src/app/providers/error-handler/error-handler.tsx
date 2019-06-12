import * as React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import { UnknownErrorContainer } from '../../containers';
import { unknownError } from '../../models';

interface ComponentProps {
}

interface ComponentState {
    hasError?: boolean;
}

class ErrorHandlerProvider extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({hasError: true});
    }

    public render(): ReactNode {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            console.log('###################################################################');
            console.log('#                                                                 #');
            console.log('#                             ERROR                               #');
            console.log('#                                                                 #');
            console.log('###################################################################');

            return (
                <Container>
                    <Segment vertical>
                        <UnknownErrorContainer />
                    </Segment>
                </Container>
            );
        } else {
            return children;
        }
    }
}

export const handleError = (error: any): string => {
    const {data} = error.response ? error.response : unknownError;
    return data.message;
};

export { ErrorHandlerProvider };