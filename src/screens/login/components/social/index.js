// @flow
import * as React from 'react';

import { SVGIcon } from '~/icons';
import { generalIcons } from '~/constants/icons/general';

import { Section, ButtonsContainer, ButtonBox, IconBox, ButtonText, Text, Disclaimer } from './styles';

export class SocialLogin extends React.PureComponent {
    render() {
        const { title } = this.props;
        return (
            <Section>
                <Text>{title}</Text>
                <ButtonsContainer>
                    <ButtonBox color="#4285F4">
                        <IconBox>
                            <SVGIcon type={generalIcons.LOGO_GOOGLE} />
                        </IconBox>

                        <ButtonText>Continue with Google</ButtonText>
                    </ButtonBox>
                    <ButtonBox color="#4267b2" isLast>
                        <IconBox>
                            <SVGIcon type={generalIcons.LOGO_FACEBOOK} size={35} />
                        </IconBox>

                        <ButtonText>Continue with Facebook</ButtonText>
                    </ButtonBox>
                </ButtonsContainer>

                <Disclaimer>We won't post to any of your accounts</Disclaimer>
            </Section>
        );
    }
}
