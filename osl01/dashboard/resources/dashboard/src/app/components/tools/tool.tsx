import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Divider, Item, Label, List } from 'semantic-ui-react';
import { ToolOverview } from '../../models';

interface ComponentProps {
    tool?: ToolOverview;
}

class ToolComponent extends Component<ComponentProps> {

    public render(): ReactNode {
        const { tool } = this.props;

        if (tool) {
            const { name, title, image, description, links, stateColor, stateText, statusText } = tool;

            return (
                <>
                    <Label color={stateColor} ribbon>{stateText}</Label>
                    <Item>
                        <Item.Image src={image} />
                        <Item.Content>
                            <Item.Header>{title}</Item.Header>
                            <Item.Meta>{description}</Item.Meta>
                            <Item.Description>
                                <List>
                                    <List.Item key={-2}>
                                        <List.Content>Container Name: <b>{name}</b></List.Content>
                                    </List.Item>
                                    <List.Item key={-1}>
                                        <List.Content>Container Status: <b>{statusText}</b></List.Content>
                                    </List.Item>
                                    <Divider />
                                    {
                                        links.map((link, index) => {
                                            const { href, external, label, title } = link;
                                            const labelText = label ? `${label}: ` : '';
                                            const target = external ? '_blank' : '_self';

                                            if (href) {
                                                return (
                                                    <List.Item key={index}>
                                                        <List.Content>
                                                            {labelText}
                                                            <a href={href} target={target}><b>{title}</b></a>
                                                        </List.Content>
                                                    </List.Item>
                                                );
                                            } else {
                                                return (
                                                    <List.Item key={index}>
                                                        <List.Content>
                                                            {labelText}<b>{title}</b>
                                                        </List.Content>
                                                    </List.Item>
                                                );
                                            }
                                        })
                                    }
                                </List>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    <Divider />
                </>
            );
        } else {
            return null;
        }
    }
}

export { ToolComponent as Tool };
