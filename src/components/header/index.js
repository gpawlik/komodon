// @flow
import * as React from 'react';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';
import { TextMedium3 } from '~/components/text';
import { Alert } from '~/components/alert';

import { BackButton } from './back-button';
import { Container, SideBox, IconContainer } from './styles';

type Props = {|
    title?: string,
    hasLogo?: boolean,
    backIcon?: string,
    secondaryIcon?: string,
    secondaryAction?: () => Promise<*> | void,
    backAction?: () => Promise<*> | void,
|};

export class Header extends React.PureComponent<Props> {
    render() {
        const { title, hasLogo, backIcon, backAction, secondaryIcon, secondaryAction } = this.props;

        return (
            <React.Fragment>
                <Container>
                    <SideBox>
                        <BackButton backIcon={backIcon} backAction={backAction} />
                    </SideBox>

                    {title ? <TextMedium3 message={title} /> : null}

                    {hasLogo ? <SVGIcon type={generalIcons.LOGO} height={25} width={60} /> : null}

                    <SideBox>
                        {secondaryIcon ? (
                            <IconContainer onPress={secondaryAction}>
                                <SVGIcon type={secondaryIcon} size={24} />
                            </IconContainer>
                        ) : null}
                    </SideBox>
                </Container>
                <Alert />
            </React.Fragment>
        );
    }
}
