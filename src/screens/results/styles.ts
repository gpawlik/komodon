import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { selectors } from '~/theme/main';

export const Container = styled.View`
    height: 100%;
`;

export const Content = styled.ScrollView`
    background-color: #eee;
    padding: 10px 20px;
`;

export const FiltersBox = styled.View`
    position: absolute;
    bottom: 70px;
    left: 0;
    right: 0;
    align-items: center;
`;

export const FiltersButton = styled.TouchableOpacity`
    background-color: ${selectors.slate};
    padding: 12px 24px;
    border-radius: 8;
`;

export const FiltersText = styled(TextRegular3)`
    color: ${selectors.white};
`;

// TODO: figure out positioning
export const EmptyContainer = styled.View`
    height: 100%;
    position: relative;
    margin-bottom: -120;
`;

export const EmptyBox = styled.View`
    padding: 20px;
`;

export const EmptyText = styled(TextRegular3)``;
