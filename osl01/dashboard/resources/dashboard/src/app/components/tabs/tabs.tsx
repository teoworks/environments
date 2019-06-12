import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Segment, Tab } from 'semantic-ui-react';
import { ToolsOverview } from '../tools';

const panes = [
    {menuItem: 'Tools', render: () => <ToolsOverview />}
];

class TabsComponent extends Component {

    public render(): ReactNode {
        return (
            <Segment basic className="main-segment tabs">
                <Tab panes={panes} />
            </Segment>
        );
    }
}

export { TabsComponent as Tabs };