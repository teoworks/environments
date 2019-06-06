import { SemanticCOLORS } from "semantic-ui-react";

export interface ToolInfo {
    order: number;
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

export interface ToolOverview extends ToolInfo {
    stateColor: SemanticCOLORS;
    stateText: string;
    statusText: string;
}
