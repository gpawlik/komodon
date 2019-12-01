// @flow
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import * as routes from '~/constants/routes';
import { navigate } from '~/navigation';
import { Card } from '~/components/card';

import { FloatingButton } from '../floating-button';
import { NoResults } from './components/no-results';

import type { Props } from './types';
import { ScrollContainer, Container, ButtonBox } from './styles';

export class EventListComponent extends React.PureComponent<Props> {
    componentDidMount = () => {
        const { hasEvents, fetchEvents } = this.props;

        !hasEvents && fetchEvents();
    };

    handleOpenEvent = (id: string) => navigate.push(routes.eventDetails, { id });

    handleShowFilters = () => navigate.showModal(routes.filters);

    render() {
        const { events, isLoadingEvents } = this.props;

        return isLoadingEvents ? (
            <Container>
                <ActivityIndicator />
            </Container>
        ) : (
            <React.Fragment>
                {events.size ? (
                    <ScrollContainer>
                        {events.map(event => {
                            const id = event.get('id');

                            return id ? (
                                <Card
                                    key={id}
                                    title={event.get('title', '')}
                                    organizer={event.get('organizer', '')}
                                    category={event.get('category', '')}
                                    imageUrl={event.get('event_image', '')}
                                    onPress={() => this.handleOpenEvent(id)}
                                />
                            ) : null;
                        })}
                    </ScrollContainer>
                ) : (
                    <Container>
                        <NoResults />
                    </Container>
                )}

                <ButtonBox>
                    <FloatingButton message="Filters" onPress={this.handleShowFilters} />
                </ButtonBox>
            </React.Fragment>
        );
    }
}
