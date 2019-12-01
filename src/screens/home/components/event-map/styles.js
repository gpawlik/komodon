// @flow
import styled from 'styled-components';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const Map = styled(MapView)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
