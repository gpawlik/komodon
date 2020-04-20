import * as React from 'react';

interface DomProps {}

// const React.createElement = (elementName: string, props: DomProps) =>
//     require('react-native-web').React.createElement(elementName, props);

export const Svg = (props: DomProps) => React.createElement('svg', props);
export const Path = (props: DomProps) => React.createElement('path', props);
export const ClipPath = (props: DomProps) => React.createElement('clipPath', props);
export const G = (props: DomProps) => React.createElement('g', props);
export const Circle = (props: DomProps) => React.createElement('circle', props);
export const Line = (props: DomProps) => React.createElement('line', props);
export const Defs = (props: DomProps) => React.createElement('defs', props);
export const Ellipse = (props: DomProps) => React.createElement('ellipse', props);
export const LinearGradient = (props: DomProps) => React.createElement('lineargradient', props);
export const RadialGradient = (props: DomProps) => React.createElement('radiialgradient', props);
export const Polygon = (props: DomProps) => React.createElement('polygon', props);
export const Polyline = (props: DomProps) => React.createElement('polyline', props);
export const Rect = (props: DomProps) => React.createElement('rect', props);
export const Stop = (props: DomProps) => React.createElement('stop', props);
export const Symbol = (props: DomProps) => React.createElement('symbol', props);
export const Text = (props: DomProps) => React.createElement('text', props);
export const Use = (props: DomProps) => React.createElement('use', props);

export default Svg;
