import styled from 'styled-components';

import { selectors } from '~/theme/main';

import { TextRegular1, TextRegular2, TextMedium2, TextMedium3, TextMedium5 } from '~/components/text';

export const Container = styled.View`
    background-color: ${selectors.white};
    border-radius: 10;
    margin-vertical: 10;
`;

export const TopBox = styled.View`
    flex-direction: row;
    padding: 6px 8px;
`;

export const DetailsBox = styled.View`
    flex: 1;
`;

export const RouteBox = styled.View`
    flex-direction: row;
    margin-bottom: ${({ isLast }) => (isLast ? 0 : 10)};
`;

export const LogoBox = styled.View`
    width: 50;
    align-items: center;
`;

export const LogoPlaceholder = styled.View`
    background-color: #aaa;
    width: 30;
    height: 30;
    margin-bottom: 3px;
    border-radius: 15;
    align-items: center;
    justify-content: center;
`;

export const LogoText = styled(TextMedium2)`
    color: ${selectors.white};
`;

export const DateText = styled(TextRegular1)``;

export const FlightBox = styled.View`
    flex-direction: row;
    flex: 1;
`;

export const FlightSegment = styled.View`
    flex-basis: 70;
    padding: 0 6px;
    align-items: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const TimeText = styled(TextMedium3)`
    margin-top: 3;
    line-height: 30;
`;

export const PlaceText = styled(TextRegular1)``;

export const DurationBox = styled.View`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`;

export const DurationText = styled(TextRegular1)`
    color: #333;
`;

export const PriceBox = styled.TouchableOpacity`
    width: 100;
    align-items: center;
    justify-content: center;
`;

export const PriceText = styled(TextMedium5)``;

export const InfoBox = styled.View`
    padding: 8px 14px;
    border-top-width: 1;
    border-top-color: #ddd;
    flex-direction: row;
    justify-content: space-between;
`;

export const AirlineText = styled(TextRegular2)`
    color: #666;
`;

export const TagText = styled(TextRegular2)`
    color: ${selectors.green};
`;
