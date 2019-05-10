import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomeContainer, PageNotFoundErrorContainer } from '../';

import { RootState } from '../../models';

class RootContainer extends Component<{}> {

    public render(): ReactNode {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomeContainer} />
                    <Route component={PageNotFoundErrorContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch) => ({});

const ConnectedRootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export { ConnectedRootContainer as RootContainer };