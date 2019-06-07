import { SemanticCOLORS } from "semantic-ui-react";

export interface ToolInfo {
    name: string;
    title: string;
    image: any;
    links: ToolLink[];
}

export interface ToolLink {
    label?: string;
    href?: string;
    title?: string;
    external?: boolean;
}

export interface DockerInfo {
    name: string;
    stateColor: SemanticCOLORS;
    stateText: string;
    statusText: string;
}

export interface ToolOverview extends ToolInfo, DockerInfo {
}
