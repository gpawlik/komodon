export interface Props {
    colour?: string;
    stroke?: string;
    size?: number;
    type: string;
    width?: number;
    height?: number;
}

export interface OuterProps {
    colour: string;
    fill: string;
    stroke?: string;
    width: number;
    height: number;
}

export interface InnerProps {
    colour: string;
    fill: string;
    stroke?: string;
    width: number;
    height: number;
}
