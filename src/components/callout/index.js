// @flow
import * as React from 'react';
import * as R from 'ramda';
import moment from 'moment';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';

import { DateBox } from '~/components/date-box';

import { Container, Touchable, ContentBox, Title, MetaText } from './styles';

type Props = {
    id?: string,
    title?: string,
    organizer?: string,
    start?: number,
    end?: number,
};

export class CustomCallout extends React.PureComponent<Props> {
    handleOpenEvent = () => {
        const { id } = this.props;

        if (!id) {
            return;
        }

        navigate.push(routes.eventDetails, { id });
    };

    render() {
        const { title, organizer, start } = this.props;
        const time = `${moment(start).format('HH:mm')}`;
        const metaText = R.compose(
            R.join(', '),
            R.filter(R.identity)
        )([time, organizer]);

        return (
            <Container>
                <Touchable onPress={this.handleOpenEvent}>
                    {start ? <DateBox time={start} /> : null}
                    <ContentBox>
                        {title ? <Title message={title} /> : null}
                        <MetaText message={metaText} />
                    </ContentBox>
                </Touchable>
            </Container>
        );
    }
}
