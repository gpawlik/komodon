// @flow
import * as React from 'react';
import { Linking, TouchableOpacity } from 'react-native';

import { ExternalLink } from '~/components/external-link';
import { Screen } from '~/components/screen';
import { DateBox } from '~/components/date-box';
import { RevealBox } from '~/components/reveal-box';

import { messages } from '~/domains/events/intl';

import { Like } from './components/like';
import { CoverImage, ContentBox, Title, MetaBox, MetaContent, MetaText, ContentText } from './styles';
import type { Props } from './types';

export class EventDetailsComponent extends React.PureComponent<Props> {
    openOrganizerUrl = () => Linking.openURL(this.props.organizerUrl);

    render() {
        const { title, location, eventStart, organizer, imageUrl, eventUrl, content } = this.props;

        return (
            <Screen title={messages.eventDetailsTitle} hasContentScroll isFullWidth>
                <CoverImage uri={imageUrl} />

                <Title message={title} />
                <MetaBox>
                    <DateBox time={eventStart} />
                    <MetaContent>
                        <MetaText message={location} />
                        <MetaText message={eventStart} />

                        <TouchableOpacity onPress={this.openOrganizerUrl}>
                            <MetaText message={organizer} />
                        </TouchableOpacity>
                    </MetaContent>

                    <Like />
                </MetaBox>

                <RevealBox>
                    <ContentBox>
                        <ContentText message={content} />
                    </ContentBox>
                </RevealBox>

                <ExternalLink text="Open on Facebook" url={eventUrl} />
            </Screen>
        );
    }
}
