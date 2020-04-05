import * as React from 'react';

import { getDescriptiveName } from '~/screens/search-date/utils';

import { Container, Item, ContentBox, NameText, DescriptionText, RemoveBox, RemoveIcon } from './styles';

interface Props {
    onPress: () => void;
    exactDates?: any;
    daysOfWeek?: any;
    daysRange?: any;
    onExactDatesChange?: () => void;
    onDaysOfWeekChange?: () => void;
    onDaysRangeChange?: () => void;
}

export class DateCriteriaBox extends React.PureComponent<Props> {
    render() {
        const {
            exactDates,
            daysOfWeek,
            daysRange,
            onExactDatesChange,
            onDaysOfWeekChange,
            onDaysRangeChange,
        } = this.props;

        return (
            <Container>
                {exactDates?.from ? (
                    <Item>
                        <ContentBox>
                            <NameText>Exact dates</NameText>
                            <DescriptionText>
                                {getDescriptiveName({ type: 'TIME_CAL', value: exactDates })}
                            </DescriptionText>
                        </ContentBox>

                        {onExactDatesChange ? (
                            <RemoveBox onPress={onExactDatesChange}>
                                <RemoveIcon />
                            </RemoveBox>
                        ) : null}
                    </Item>
                ) : null}

                {!!daysOfWeek.length ? (
                    <Item>
                        <ContentBox>
                            <NameText>Days of week</NameText>
                            <DescriptionText>
                                {getDescriptiveName({ type: 'TIME_DAYS', value: daysOfWeek })}
                            </DescriptionText>
                        </ContentBox>

                        {onDaysOfWeekChange ? (
                            <RemoveBox onPress={onDaysOfWeekChange}>
                                <RemoveIcon />
                            </RemoveBox>
                        ) : null}
                    </Item>
                ) : null}

                {daysRange?.from ? (
                    <Item>
                        <ContentBox>
                            <NameText>Days range</NameText>
                            <DescriptionText>
                                {getDescriptiveName({ type: 'TIME_RANGE', value: daysRange })}
                            </DescriptionText>
                        </ContentBox>

                        {onDaysRangeChange ? (
                            <RemoveBox onPress={onDaysRangeChange}>
                                <RemoveIcon />
                            </RemoveBox>
                        ) : null}
                    </Item>
                ) : null}
            </Container>
        );
    }
}
