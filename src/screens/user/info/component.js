// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';
import { Button } from '~/components/button';
import { TextRegular2 } from '~/components/text';

import { messages } from '~/domains/user/intl';

import type { Props } from './types';

export class UserInfoComponent extends React.PureComponent<Props> {
    handleOnPress = () => {
        console.log('TOGGLE!');
        this.props.changeActive({ value: !this.props.isActive });
    };

    render() {
        const { firstName, secondName, location, isActive } = this.props;
        // $FlowFixMe
        const activeString = `${isActive}`;

        return (
            <Screen title={messages.title} qaName="user-profile">
                <TextRegular2 message={messages.infoFirstName} />
                <TextRegular2 message={firstName} />
                <TextRegular2 message={messages.infoSecondName} />
                <TextRegular2 message={secondName} />
                <TextRegular2 message={messages.infoLocation} />
                <TextRegular2 message={location} />
                <TextRegular2 message={messages.infoActive} />
                <TextRegular2 message={activeString} />

                <Button message={messages.buttonToggle} onPress={this.handleOnPress} />
            </Screen>
        );
    }
}
