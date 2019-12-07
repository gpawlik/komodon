// @flow
import * as React from 'react';
import * as R from 'ramda';
import { connect } from 'react-redux';

import { getDeparturePlace, getDestinationPlace, getDepartureDates, getReturnDates } from '~/domains/search/selectors';
import { searchFlights } from '~/domains/search/actions';

import { generalIcons } from '~/constants/icons/general';
import { Header } from '~/components/header';
import { Button } from '~/components/button';
import { CalendarBox } from '~/components/calendar-box';
import { DaysBox } from '~/components/days-box';
import { SliderBox } from '~/components/slider-box';
import { ButtonBox } from './components/button-box';
import { ValueBox } from './components/value-box';
import { RoundTripBox } from './components/round-trip';
import { getDescriptiveName } from './utils';
import { Container, VerticalBox, Flyout, ConfirmBox, CriteriaText, SwitchButton } from './styles';

export const SearchboxComponent = props => {
    const [departureDates, onDepartureDatesChange] = React.useState(props.departureDates);
    const [departureDaysOfWeek, onDepartureWeekdaysChange] = React.useState([]);

    const [returnDates, onReturnDatesChange] = React.useState(props.returnDates);
    const [returnDaysOfWeek, onReturnWeekdaysChange] = React.useState([]);
    const [daysRange, onReturnDaysNumberChange] = React.useState({});

    const [roundTrip, onRoundTripSelect] = React.useState(true);
    const [focusedField, onFocus] = React.useState('');
    const [focusedDepTime, onFocusDepTime] = React.useState('DEP_TIME_CAL');
    const [focusedRetTime, onFocusRetTime] = React.useState('RET_TIME_CAL');

    const [depDescriptiveName, onDepDescriptiveName] = React.useState('');
    const [retDescriptiveName, onRetDescriptiveName] = React.useState('');

    const departureCriteria = focusedDepTime === 'DEP_TIME_CAL' ? { departureDates } : { departureDaysOfWeek };
    const returnCriteria = R.cond([
        [R.equals('RET_TIME_CAL'), R.always({ returnDates })],
        [R.equals('RET_TIME_DAYS'), R.always({ returnDaysOfWeek })],
        [R.equals('RET_TIME_RANGE'), R.always({ daysRange })],
        [R.T, R.always({})],
    ])(focusedRetTime);

    const handleDepartureDatesChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_CAL', value });
        onDepDescriptiveName(name);
        onDepartureDatesChange(value);
    };

    const handleDepartureWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'DEP_TIME_DAYS', value });
        onDepDescriptiveName(name);
        onDepartureWeekdaysChange(value);
    };

    const handleReturnDatesChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_CAL', value });
        onRetDescriptiveName(name);
        onReturnDatesChange(value);
    };

    const handleReturnWeekdaysChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_DAYS', value });
        onRetDescriptiveName(name);
        onReturnWeekdaysChange(value);
    };

    const handleReturnDaysNumberChange = value => {
        const name = getDescriptiveName({ type: 'RET_TIME_RANGE', value });
        onRetDescriptiveName(name);
        onReturnDaysNumberChange(value);
    };

    const onSubmit = () => {
        const payload = {
            departurePlace: props.departurePlace.placeId,
            destinationPlace: props.destinationPlace.placeId,
            roundTrip,
            filter: {},
            ...departureCriteria,
            ...returnCriteria,
        };
        console.log({ payload });
        //props.searchFlights(payload);
    };

    const getDepTimeBox = R.cond([
        [
            R.equals('DEP_TIME_CAL'),
            () => (
                <CalendarBox
                    value={departureDates}
                    onValueChange={handleDepartureDatesChange}
                    maxDate={returnDates.from}
                />
            ),
        ],
        [
            R.equals('DEP_TIME_DAYS'),
            () => <DaysBox value={departureDaysOfWeek} onValueChange={handleDepartureWeekdaysChange} />,
        ],
        [R.T, () => null],
    ]);

    const getRetTimeBox = R.cond([
        [
            R.equals('RET_TIME_CAL'),
            () => (
                <CalendarBox
                    value={returnDates}
                    onValueChange={handleReturnDatesChange}
                    minDate={departureDates.from}
                />
            ),
        ],
        [
            R.equals('RET_TIME_DAYS'),
            () => <DaysBox value={returnDaysOfWeek} onValueChange={handleReturnWeekdaysChange} />,
        ],
        [R.equals('RET_TIME_RANGE'), () => <SliderBox onValueChange={handleReturnDaysNumberChange} />],
        [R.T, () => null],
    ]);

    const handleFocus = value => {
        onFocus(value === focusedField ? '' : value);
    };

    const handlePlaceSwitch = () => {
        onDepartureChange(props.destinationPlace);
        onDestinationChange(props.departurePlace);
    };

    return (
        <Container>
            <RoundTripBox onChange={onRoundTripSelect} isRoundTrip={roundTrip} />
            <VerticalBox>
                <ValueBox
                    label="From"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 0,
                            otherParam: 'First Details',
                        });
                    }}
                    showContent={focusedField === 'DEP_PLACE'}
                    value={props.departurePlace.placeName}
                    mainValue={props.departurePlace.placeCode}
                    onConfirm={() => handleFocus('')}
                    isLarge
                />

                <SwitchButton onPress={handlePlaceSwitch} />

                <ValueBox
                    label="To"
                    onPress={() => {
                        props.navigate('SearchPlaceModal', {
                            focused: 1,
                            otherParam: 'First Details',
                        });
                    }}
                    showContent={focusedField === 'DES_PLACE'}
                    value={props.destinationPlace.placeName}
                    mainValue={props.destinationPlace.placeCode}
                    onConfirm={() => handleFocus('')}
                    alignRight
                    isLarge
                />
            </VerticalBox>

            <VerticalBox>
                <ValueBox
                    label="Departure Time"
                    onPress={() => handleFocus('DEP_TIME')}
                    showContent={focusedField === 'DEP_TIME'}
                    onConfirm={() => handleFocus('')}
                    value={depDescriptiveName}
                />

                {roundTrip ? (
                    <ValueBox
                        label="Return Time"
                        onPress={() => handleFocus('RET_TIME')}
                        showContent={focusedField === 'RET_TIME'}
                        value={retDescriptiveName}
                    />
                ) : null}
            </VerticalBox>

            {focusedField === 'DEP_TIME' || focusedField === 'RET_TIME' ? (
                <Flyout>
                    <Header backIcon={generalIcons.CLOSE} backAction={() => handleFocus('')} />
                    {focusedField === 'DEP_TIME' && (
                        <React.Fragment>
                            <CriteriaText>{depDescriptiveName}</CriteriaText>
                            <ButtonBox
                                onChange={onFocusDepTime}
                                options={[
                                    { id: 'DEP_TIME_CAL', text: 'Dates' },
                                    { id: 'DEP_TIME_DAYS', text: 'Days of  week' },
                                ]}
                                selected={focusedDepTime}
                            />
                            {getDepTimeBox(focusedDepTime)}
                        </React.Fragment>
                    )}
                    {focusedField === 'RET_TIME' && roundTrip && (
                        <React.Fragment>
                            <CriteriaText>{retDescriptiveName}</CriteriaText>
                            <ButtonBox
                                onChange={onFocusRetTime}
                                options={[
                                    { id: 'RET_TIME_CAL', text: 'Dates' },
                                    { id: 'RET_TIME_DAYS', text: 'Days of week' },
                                    { id: 'RET_TIME_RANGE', text: 'Number Days' },
                                ]}
                                selected={focusedRetTime}
                            />
                            {getRetTimeBox(focusedRetTime)}
                        </React.Fragment>
                    )}

                    <ConfirmBox>
                        <Button message="Select this" onPress={() => handleFocus('')} />
                    </ConfirmBox>
                </Flyout>
            ) : null}

            <Button message="Search" onPress={onSubmit} />
        </Container>
    );
};

export const mapStateToProps = (state: any): StateProps => ({
    departurePlace: getDeparturePlace(state),
    destinationPlace: getDestinationPlace(state),
    departureDates: getDepartureDates(state),
    returnDates: getReturnDates(state),
});

const mapDispatchToProps = {
    searchFlights,
};

export const Searchbox = connect(mapStateToProps, mapDispatchToProps)(SearchboxComponent);
