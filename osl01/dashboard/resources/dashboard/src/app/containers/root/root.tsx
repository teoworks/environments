import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { HomeContainer, PageNotFoundErrorContainer } from '../';

class RootContainer extends Component {

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

export { RootContainer };