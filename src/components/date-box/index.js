// @flow
import * as React from 'react';
import moment from 'moment';

import { Container, DayBox, DayText, MonthBox, MonthText } from './styles';

type Props = {
    time: number,
};

export const DateBox = ({ time }: Props) => {
    const day = moment(time).format('D');
    const month = moment(time).format('MMM');

    return (
        <Container>
            <DayBox>
                <DayText>{day}</DayText>
            </DayBox>
            <MonthBox>
                <MonthText>{month}</MonthText>
            </MonthBox>
        </Container>
    );
};
