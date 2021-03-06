import * as R from 'ramda';
import styled from 'styled-components';

import { TextRegular3 } from '~/components/text';
import { alertCategories } from '~/domains/alerts/constants';

import { selectors } from '~/theme/main';

const getBackgroundColor = R.cond([
    [R.propEq('type', alertCategories.SUCCESS), R.always(selectors.green)],
    [R.propEq('type', alertCategories.WARNING), R.always(selectors.orange)],
    [R.T, R.always(selectors.red)],
]);

export const Container = styled.TouchableOpacity`
    background-color: ${getBackgroundColor};
    padding: ${selectors.ss5} ${selectors.ss8};
    align-items: center;
`;

export const Text = styled(TextRegular3)`
    color: ${selectors.white};
`;
