import * as React from 'react';

import { getDescriptiveName } from '~/screens/search-date/utils';

import {
    Container,
    Item,
    ContentBox,
    NameText,
    DescriptionText,
    IconBox,
    StatusIcon,
    RemoveBox,
    RemoveIcon,
} from './styles';

interface Props {
    onPress: () => void;
    exactDates?: any;
    daysOfWeek?: any;
    daysRange?: any;
    onExactDatesChange?: () => void;
    onDaysOfWeekChange?: () => void;
    onDaysRangeChange?: () => void;
    onPressItem?: (arg0: string) => void;
    isDeparture?: boolean;
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
            onPressItem,
            isDeparture,
        } = this.props;

        const isExactDatesSelected = exactDates?.from;
        const isWeekdaysSelected = !!daysOfWeek.length;
        const isDaysRangeSelected = daysRange?.from;

        const onPressA = () => onPressItem(isDeparture ? 'DEP_TIME_CAL' : 'RET_TIME_CAL');
        const onPressB = () => onPressItem(isDeparture ? 'DEP_TIME_DAYS' : 'RET_TIME_DAYS');
        const onPressC = () => onPressItem('RET_TIME_RANGE');

        return (
            <Container>
                <Item isSelected={isExactDatesSelected} onPress={onPressA}>
                    <ContentBox>
                        <IconBox>
                            <StatusIcon isSelected={isExactDatesSelected} />
                        </IconBox>

                        {!isExactDatesSelected ? (
                            <NameText>Exact dates</NameText>
                        ) : (
                            <DescriptionText>
                                {getDescriptiveName({ type: 'TIME_CAL', value: exactDates })}
                            </DescriptionText>
                        )}
                    </ContentBox>

                    {onExactDatesChange && isExactDatesSelected ? (
                        <RemoveBox onPress={onExactDatesChange}>
                            <RemoveIcon />
                        </RemoveBox>
                    ) : null}
                </Item>

                <Item isSelected={isWeekdaysSelected} onPress={onPressB}>
                    <ContentBox>
                        <IconBox>
                            <StatusIcon isSelected={isWeekdaysSelected} />
                        </IconBox>

                        {!isWeekdaysSelected ? (
                            <NameText>Days of week</NameText>
                        ) : (
                            <DescriptionText>
                                {getDescriptiveName({ type: 'TIME_DAYS', value: daysOfWeek })}
                            </DescriptionText>
                        )}
                    </ContentBox>

                    {onDaysOfWeekChange && isWeekdaysSelected ? (
                        <RemoveBox onPress={onDaysOfWeekChange}>
                            <RemoveIcon />
                        </RemoveBox>
                    ) : null}
                </Item>

                {daysRange ? (
                    <Item isSelected={isDaysRangeSelected} onPress={onPressC}>
                        <ContentBox>
                            <IconBox>
                                <StatusIcon isSelected={isDaysRangeSelected} />
                            </IconBox>

                            {!isDaysRangeSelected ? (
                                <NameText>Days range</NameText>
                            ) : (
                                <DescriptionText>
                                    {getDescriptiveName({ type: 'TIME_RANGE', value: daysRange })}
                                </DescriptionText>
                            )}
                        </ContentBox>

                        {onDaysRangeChange && isDaysRangeSelected ? (
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
