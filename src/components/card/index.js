// @flow
import * as React from 'react';
import * as R from 'ramda';
import { type $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { TextRegular2 } from '~/components/text';
import { Label } from '~/components/label';

import { messages } from '~/domains/filters/intl';

import { Container, EventImage, ContentBox, TagLine, TagText, Title } from './styles';

type Props = {
    title: $npm$ReactIntl$MessageDescriptor | string,
    imageUrl?: string,
    category: string,
    organizer?: $npm$ReactIntl$MessageDescriptor | string,
    address?: $npm$ReactIntl$MessageDescriptor | string,
    onPress: () => void | Promise<*>,
};

export const Card = ({ title, imageUrl, category, organizer, address, onPress }: Props) => {
    const directions = R.compose(
        R.join(', '),
        R.filter(R.identity)
    )([organizer, address]);

    return (
        <Container onPress={onPress}>
            <EventImage uri={imageUrl} />
            <ContentBox>
                <TagLine>
                    <Label message={messages[category]} />
                    <TagText message={'24 FEB, 12:00-16:00'} />
                </TagLine>
                <Title message={title} />
                {directions ? <TextRegular2 message={directions} /> : null}
            </ContentBox>
        </Container>
    );
};
