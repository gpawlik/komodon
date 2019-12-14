// @flow
import * as React from 'react';
import { generalIcons } from '~/constants/icons/general';

import { ArrowLeft } from './arrow-left';
import { Bell } from './bell';
import { Close } from './close';
import { CloseCircle } from './close-circle';
import { ExternalLink } from './external-link';
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

import type { OuterProps } from './types';

export const map = {
    [generalIcons.ARROW_LEFT]: ArrowLeft,
    [generalIcons.BELL]: Bell,
    [generalIcons.CLOSE]: Close,
    [generalIcons.CLOSE_CIRCLE]: CloseCircle,
    [generalIcons.EXTERNAL_LINK]: ExternalLink,
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
};

export const getIconComponent = (type: string, props: OuterProps) => {
    return map[type] ? React.createElement(map[type], props) : null;
};
