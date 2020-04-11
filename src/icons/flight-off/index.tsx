import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { InnerProps } from '../types';

export const FlightOff = ({ colour, width, height }: InnerProps) => (
    <Svg viewBox="0 0 512 512" width={width} height={height}>
        <Path
            fill={colour}
            d="M498.46 328.118c-.27-.907-6.852-22.43-27.419-34.58-18.644-11.014-64.307-26.997-66.24-27.671-3.143-1.095-5.966-2.327-7.279-2.977-.953-1.54-2.735-5.11-3.756-7.916l-51.58-141.783c-1.114-3.065-3.51-8.943-5.427-11.536-3.277-4.45-14.547-7.521-15.82-7.856l-2.503-.66c-3.413-.898-9.655-2.304-13.1-1.61-2.041.409-8.247 1.66-8.544 18 0 0-2.125 117.296-2.148 117.809-.52-.146-49.224-16.896-49.224-16.896-3.217-1.107-6.102-2.353-7.417-2.996-.996-1.5-2.909-5.087-4.003-7.885l-18.832-48.144c-.135-.34-3.279-8.33-5.912-11.505-3.528-4.248-12.578-5.814-12.668-5.829-2.603-.384-6.445-.405-9.164.41-4.904 1.476-7.706 7.444-8.322 17.738-1.666 27.936-4.534 69.212-5.776 75.254-2.741 5.526-25.897 39.816-41.78 62.858-1.239 1.8-5.346 7.967-6.01 11.675-1.37 7.622 8.209 13.16 8.617 13.39 2.394 1.362 5.825 2.713 8.15 3.216 5.575 1.197 15.275-4.321 17.163-5.435l44.482-26.348c2.893-1.71 5.698-3.087 7.013-3.654 1.789.227 5.787 1.117 8.683 2.114 0 0 48.706 16.779 49.181 16.959-.3.45-70.824 94.19-70.824 94.19-2.118 2.816-5.776 8.051-6.448 11.48-1.08 5.511 3.433 10.473 13.413 14.76l2.375 1.021a92.615 92.615 0 006.034 2.334c2.242.772 4.5 1.425 6.09 1.618 5.484.657 15.445-5.453 16.561-6.15l127.936-79.971c2.822-1.764 5.555-3.198 6.879-3.816 1.793.216 5.694 1.064 8.52 2.024 1.938.66 47.765 16.178 69.238 18.978 23.689 3.084 42.125-9.82 42.897-10.372 6.105-4.351 9.1-13.05 6.965-20.238zm0 0M134.547 135.935l-37.61-12.95c-8.012-2.759-16.766 1.572-19.556 9.676-2.789 8.1 1.442 16.906 9.453 19.664l37.61 12.95c8.011 2.759 16.77-1.575 19.56-9.675 2.79-8.103-1.446-16.907-9.457-19.665zm0 0M95.175 250.28l-37.61-12.95c-8.012-2.76-16.766 1.572-19.555 9.672-2.79 8.103 1.442 16.906 9.453 19.664l37.61 12.95c8.011 2.759 16.769-1.571 19.56-9.674 2.788-8.1-1.447-16.904-9.458-19.662zm0 0M114.861 193.105L32.856 164.87c-8.011-2.759-16.77 1.575-19.56 9.674-2.79 8.104 1.446 16.908 9.457 19.666l82.006 28.237c8.01 2.758 16.768-1.572 19.559-9.675 2.789-8.1-1.446-16.907-9.457-19.666zm0 0"
        />
    </Svg>
);
