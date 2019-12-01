// @flow
import * as React from 'react';
import * as R from 'ramda';
import styled, { css } from 'styled-components';
import { FormattedMessage, type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { isIntlDescriptor } from '~/utils/intl';
import { selectors } from '~/theme/main';

type Props = {|
    message: $npm$ReactIntl$MessageDescriptor | string,
    children: $npm$ReactIntl$MessageDescriptor | string,
    style: Object,
|};

const TextBasic = styled.Text`
    color: ${selectors.slate};
    ${({ size }) =>
        R.compose(
            getFontStyle,
            R.clamp(1, 9)
        )(size)};
`;

export const TextDefault = ({ message, children, style, ...rest }: Props) => {
    const foo = message || children;
    if (typeof foo === 'string') {
        return (
            <TextBasic style={style} {...rest}>
                {foo}
            </TextBasic>
        );
    }

    if (isIntlDescriptor(foo)) {
        return (
            <FormattedMessage {...foo}>
                {(m: string) => (
                    <TextBasic style={style} {...rest}>
                        {m}
                    </TextBasic>
                )}
            </FormattedMessage>
        );
    }

    return null;
};

const fontStyle1 = css`
    font-size: ${selectors.fs1};
    line-height: ${selectors.lh1};
    letter-spacing: 0.2px;
`;

const fontStyle2 = css`
    font-size: ${selectors.fs2};
    line-height: ${selectors.lh2};
    letter-spacing: 0.2px;
`;

const fontStyle3 = css`
    font-size: ${selectors.fs3};
    line-height: ${selectors.lh3};
    letter-spacing: 0.2px;
`;

const fontStyle4 = css`
    font-size: ${selectors.fs4};
    line-height: ${selectors.lh4};
    letter-spacing: 0.2px;
`;

const fontStyle5 = css`
    font-size: ${selectors.fs5};
    line-height: ${selectors.lh5};
    letter-spacing: 0.2px;
`;

const fontStyle6 = css`
    font-size: ${selectors.fs6};
    line-height: ${selectors.lh6};
    letter-spacing: 0;
`;

const fontStyle7 = css`
    font-size: ${selectors.fs7};
    line-height: ${selectors.lh7};
    letter-spacing: 0;
`;

const fontStyle8 = css`
    font-size: ${selectors.fs8};
    line-height: ${selectors.lh8};
    letter-spacing: -0.2px;
`;

const fontStyle9 = css`
    font-size: ${selectors.fs9};
    line-height: ${selectors.lh9};
    letter-spacing: -0.2px;
`;

const getFontStyle = R.cond([
    [R.equals(1), R.always(fontStyle1)],
    [R.equals(2), R.always(fontStyle2)],
    [R.equals(3), R.always(fontStyle3)],
    [R.equals(4), R.always(fontStyle4)],
    [R.equals(5), R.always(fontStyle5)],
    [R.equals(6), R.always(fontStyle6)],
    [R.equals(7), R.always(fontStyle7)],
    [R.equals(8), R.always(fontStyle8)],
    [R.equals(9), R.always(fontStyle9)],
]);

// TODO: integrate fonts
const fontWeightRegular = css`
    font-weight: 100;
`;
const fontWeightMedium = css`
    font-weight: 500;
`;

const textAlignCenter = css`
    text-align: center;
`;
const textAlignRight = css`
    text-align: right;
`;

export const TextRegular1 = styled(TextDefault).attrs({ size: 1 })`
    ${fontWeightRegular};
`;

export const TextRegular2 = styled(TextDefault).attrs({ size: 2 })`
    ${fontWeightRegular};
`;

export const TextRegular3 = styled(TextDefault).attrs({ size: 3 })`
    ${fontWeightRegular};
`;

export const TextRegular4 = styled(TextDefault).attrs({ size: 4 })`
    ${fontWeightRegular};
`;

export const TextRegular5 = styled(TextDefault).attrs({ size: 5 })`
    ${fontWeightRegular};
`;

export const TextRegular6 = styled(TextDefault).attrs({ size: 6 })`
    ${fontWeightRegular};
`;

export const TextRegular7 = styled(TextDefault).attrs({ size: 7 })`
    ${fontWeightRegular};
`;

export const TextRegular8 = styled(TextDefault).attrs({ size: 8 })`
    ${fontWeightRegular};
`;

export const TextRegular9 = styled(TextDefault).attrs({ size: 9 })`
    ${fontWeightRegular};
`;

export const TextRegular1Center = styled(TextDefault).attrs({ size: 1 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular2Center = styled(TextDefault).attrs({ size: 2 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular3Center = styled(TextDefault).attrs({ size: 3 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular4Center = styled(TextDefault).attrs({ size: 4 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular5Center = styled(TextDefault).attrs({ size: 5 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular6Center = styled(TextDefault).attrs({ size: 6 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular7Center = styled(TextDefault).attrs({ size: 7 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular8Center = styled(TextDefault).attrs({ size: 8 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular9Center = styled(TextDefault).attrs({ size: 9 })`${fontWeightRegular}${textAlignCenter}`;

export const TextRegular1Right = styled(TextDefault).attrs({ size: 1 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular2Right = styled(TextDefault).attrs({ size: 2 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular3Right = styled(TextDefault).attrs({ size: 3 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular4Right = styled(TextDefault).attrs({ size: 4 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular5Right = styled(TextDefault).attrs({ size: 5 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular6Right = styled(TextDefault).attrs({ size: 6 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular7Right = styled(TextDefault).attrs({ size: 7 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular8Right = styled(TextDefault).attrs({ size: 8 })`${fontWeightRegular}${textAlignRight}`;

export const TextRegular9Right = styled(TextDefault).attrs({ size: 9 })`${fontWeightRegular}${textAlignRight}`;

export const TextMedium1 = styled(TextDefault).attrs({ size: 1 })`
    ${fontWeightMedium};
`;

export const TextMedium2 = styled(TextDefault).attrs({ size: 2 })`
    ${fontWeightMedium};
`;

export const TextMedium3 = styled(TextDefault).attrs({ size: 3 })`
    ${fontWeightMedium};
`;

export const TextMedium4 = styled(TextDefault).attrs({ size: 4 })`
    ${fontWeightMedium};
`;

export const TextMedium5 = styled(TextDefault).attrs({ size: 5 })`
    ${fontWeightMedium};
`;

export const TextMedium6 = styled(TextDefault).attrs({ size: 6 })`
    ${fontWeightMedium};
`;

export const TextMedium7 = styled(TextDefault).attrs({ size: 7 })`
    ${fontWeightMedium};
`;

export const TextMedium8 = styled(TextDefault).attrs({ size: 8 })`
    ${fontWeightMedium};
`;

export const TextMedium9 = styled(TextDefault).attrs({ size: 9 })`
    ${fontWeightMedium};
`;

export const TextMedium1Center = styled(TextDefault).attrs({ size: 1 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium2Center = styled(TextDefault).attrs({ size: 2 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium3Center = styled(TextDefault).attrs({ size: 3 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium4Center = styled(TextDefault).attrs({ size: 4 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium5Center = styled(TextDefault).attrs({ size: 5 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium6Center = styled(TextDefault).attrs({ size: 6 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium7Center = styled(TextDefault).attrs({ size: 7 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium8Center = styled(TextDefault).attrs({ size: 8 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium9Center = styled(TextDefault).attrs({ size: 9 })`${fontWeightMedium}${textAlignCenter}`;

export const TextMedium1Right = styled(TextDefault).attrs({ size: 1 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium2Right = styled(TextDefault).attrs({ size: 2 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium3Right = styled(TextDefault).attrs({ size: 3 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium4Right = styled(TextDefault).attrs({ size: 4 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium5Right = styled(TextDefault).attrs({ size: 5 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium6Right = styled(TextDefault).attrs({ size: 6 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium7Right = styled(TextDefault).attrs({ size: 7 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium8Right = styled(TextDefault).attrs({ size: 8 })`${fontWeightMedium}${textAlignRight}`;

export const TextMedium9Right = styled(TextDefault).attrs({ size: 9 })`${fontWeightMedium}${textAlignRight}`;
