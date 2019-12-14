// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';

// import { generalIcons } from '~/constants/icons/general';
// import { SVGIcon } from '~/icons';

import { ContentBox } from './styles';

type Props = {};

export class ForgottenPassword extends React.PureComponent<Props> {
    render() {
        return (
            <Screen title="Forgotten password" qaName="about" hasContentScroll>
                <ContentBox />
            </Screen>
        );
    }
}
