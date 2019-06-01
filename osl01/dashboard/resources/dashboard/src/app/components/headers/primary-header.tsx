import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import { RootState } from '../../models';

interface ComponentStateProps {
}

interface ComponentDispatchProps {
}

interface ComponentParamProps {
    title?: string;
    subtitle?: string;
}

type ComponentProps = ComponentParamProps & ComponentDispatchProps & ComponentStateProps;

interface ComponentState {
}

const initialState: ComponentState = {};

class PrimaryHeaderComponent extends Component<ComponentProps, ComponentState> {

    constructor(props: ComponentProps) {
        super(props);
        this.state = initialState;
    }

    public render(): ReactNode {
        const browserTitle = this.browserTitle();
        const headerTitle = this.headerTitle();
        document.title = browserTitle;

        return (
            <Segment basic className="primary-header">
                <Header as='h2' className="primary-header-title">
                    <Header.Content>
                        <Link to="/">
                            {headerTitle}
                        </Link>
                    </Header.Content>
                </Header>
            </Segment>
        );
    }

    private browserTitle = (): string => {
        const {title, subtitle} = this.props;
        const formattedHeaderTitle = title ? title : 'teoworks - Dashboard';
        if (subtitle) {
            return `${subtitle} - ${formattedHeaderTitle}`;
        } else {
            return formattedHeaderTitle;
        }
    };

    private headerTitle = (): string => {
        const {title, subtitle} = this.props;
        const formattedHeaderTitle = title ? title : 'teoworks - Dashboard';
        if (subtitle) {
            return `${formattedHeaderTitle} - ${subtitle}`;
        } else {
            return formattedHeaderTitle;
        }
    };
}

const mapStateToProps = (state: RootState): ComponentStateProps => ({});

const mapDispatchToProps = (dispatch): ComponentDispatchProps => ({});

const ConnectedPrimaryHeaderComponent = connect(mapStateToProps, mapDispatchToProps)(PrimaryHeaderComponent);

export { ConnectedPrimaryHeaderComponent as PrimaryHeader };