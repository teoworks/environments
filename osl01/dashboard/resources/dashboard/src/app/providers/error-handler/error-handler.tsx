import * as moment from 'moment';
import * as React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import { UnknownErrorContainer } from '../../containers';
import { ActionType, EntityType, GlobalError } from '../../models';

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
        console.log('###################################################################');
        console.log('#                                                                 #');
        console.log('#                             ERROR                               #');
        console.log('#                                                                 #');
        console.log('###################################################################');

        this.setState({hasError: true});
    }

    public render(): ReactNode {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
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

const unknownError = {
    error: 'Unknown error',
    message: 'Unknown error occurred'
};

export const handleError = (error: any): string => {
    const {data} = error && error.response ? error.response : {data: unknownError};
    return data.message;
};

export const handlerError = (error: any, entityType: EntityType = EntityType.UNKNOWN, actionType: ActionType = ActionType.NONE): GlobalError => {
    const {data} = error && error.response && error.response.data ? error.response : {data: {...unknownError, timestamp: moment().format()}};

    return {
        ...data,
        entityType,
        actionType
    };
};

export { ErrorHandlerProvider };