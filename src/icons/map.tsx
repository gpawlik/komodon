import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { ArrowLeft } from './arrow-left';
import { ArrowDown } from './arrow-down';
import { ArrowUp } from './arrow-up';
import { Banknote } from './banknote';
import { Bell } from './bell';
import { CirclePlus } from './circle-plus';
import { CircleTick } from './circle-tick';
import { Close } from './close';
import { CloseCircle } from './close-circle';
import { ExternalLink } from './external-link';
import { FlightOn } from './flight-on';
import { FlightOff } from './flight-off';
import { Heart } from './heart';
import { Menu } from './menu';
import { Logo } from './logo';
import { LogoFacebook } from './logo-facebook';
import { LogoGoogle } from './logo-google';
import { MultiChoiceOn } from './multi-choice-on';
import { MultiChoiceOff } from './multi-choice-off';
import { Pin } from './pin';
import { Profile } from './profile';
import { SingleChoiceOn } from './single-choice-on';
import { SingleChoiceOff } from './single-choice-off';
import { Swap } from './swap';
import { Tick } from './tick';
import { Trash } from './trash';

import { OuterProps } from './types';

export const map = {
    [generalIcons.ARROW_LEFT]: ArrowLeft,
    [generalIcons.ARROW_DOWN]: ArrowDown,
    [generalIcons.ARROW_UP]: ArrowUp,
    [generalIcons.BANKNOTE]: Banknote,
    [generalIcons.BELL]: Bell,
    [generalIcons.CIRCLE_PLUS]: CirclePlus,
    [generalIcons.CIRCLE_TICK]: CircleTick,
    [generalIcons.CLOSE]: Close,
    [generalIcons.CLOSE_CIRCLE]: CloseCircle,
    [generalIcons.EXTERNAL_LINK]: ExternalLink,
    [generalIcons.FLIGHT_ON]: FlightOn,
    [generalIcons.FLIGHT_OFF]: FlightOff,
    [generalIcons.HEART]: Heart,
    [generalIcons.LOGO]: Logo,
    [generalIcons.LOGO_FACEBOOK]: LogoFacebook,
    [generalIcons.LOGO_GOOGLE]: LogoGoogle,
    [generalIcons.MENU]: Menu,
    [generalIcons.MULTI_CHOICE_ON]: MultiChoiceOn,
    [generalIcons.MULTI_CHOICE_OFF]: MultiChoiceOff,
    [generalIcons.PIN]: Pin,
    [generalIcons.PROFILE]: Profile,
    [generalIcons.SINGLE_CHOICE_ON]: SingleChoiceOn,
    [generalIcons.SINGLE_CHOICE_OFF]: SingleChoiceOff,
    [generalIcons.SWAP]: Swap,
    [generalIcons.TICK]: Tick,
    [generalIcons.TRASH]: Trash,
};

export const getIconComponent = (type: string, props: OuterProps) => {
    return map[type] ? React.createElement(map[type], props) : null;
};
