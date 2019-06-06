import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Card, Divider, Image, Label, List } from "semantic-ui-react";
import { ToolOverview } from "../../models";

interface ComponentProps {
    tool?: ToolOverview;
}

class ToolCardComponent extends Component<ComponentProps> {

    public render(): ReactNode {
        const { tool } = this.props;

        if (tool) {
            const { name, title, image, links, stateColor, stateText, statusText } = tool;

            return (
                <Card>
                    <Image src={image} wrapped ui={false} />
                    <Card.Content>
                        <Label color={stateColor} ribbon='right'>{stateText}</Label>
                        <Card.Header>{title}</Card.Header>
                        <Divider />
                        <Card.Meta>
                            <div>Container Name: {name}</div>
                            <div>Container Status: {statusText}</div>
                        </Card.Meta>
                        <Divider />
                        <Card.Description>
                            <List>
                                {
                                    links.map((link, index) => {
                                        const { href, external, label, title } = link;
                                        const labelText = label ? `${label}: ` : '';
                                        const target = external ? '_blank' : '_self';

                                        if (href) {
                                            return (
                                                <List.Item key={index}>
                                                    <List.Content>
                                                        {labelText}<a href={href} target={target}><b>{title}</b></a>
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
                        </Card.Description>
                    </Card.Content>
                </Card>
            );
        } else {
            return null;
        }
    }
}

export { ToolCardComponent as ToolCard };
