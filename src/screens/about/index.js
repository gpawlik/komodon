// @flow
import * as React from 'react';

import { ExternalLink } from '~/components/external-link';
import { Screen } from '~/components/screen';

import { messages } from '~/domains/about/intl';
import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { HeaderBox, ContentBox, ContentText } from './styles';

type Props = {};

export class About extends React.PureComponent<Props> {
    render() {
        return (
            <Screen title={messages.title} qaName="about">
                <HeaderBox>
                    <SVGIcon type={generalIcons.LOGO} size={120} />
                </HeaderBox>

                <ContentBox>
                    <ContentText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor ac odio ornare
                        rutrum. Ut nec enim id elit tincidunt aliquet. Vestibulum ut dui quis leo vulputate efficitur
                        vitae in est.
                    </ContentText>

                    <ContentText>
                        Donec porta lorem augue, sit amet accumsan dolor fermentum vitae. Morbi vitae luctus nulla. In
                        mollis viverra tempor. In hac habitasse platea dictumst. Ut porta, orci nec scelerisque
                        pharetra, lorem sapien finibus massa, non lobortis sapien lectus lobortis nunc.
                    </ContentText>

                    <ContentText>
                        Nullam accumsan velit a turpis feugiat, at auctor sapien tincidunt. In pretium enim id aliquet
                        tincidunt.
                    </ContentText>
                </ContentBox>

                <ExternalLink text="Visit us on Facebook" url="http://facebook.com" />
            </Screen>
        );
    }
}
