// @flow
import * as React from 'react';
import type { $npm$ReactIntl$MessageDescriptor } from 'react-intl';

import { Container, Title } from './styles';

type Props = {|
    title?: $npm$ReactIntl$MessageDescriptor,
    children?: React.Node,
|};

export class Section extends React.PureComponent<Props> {
    render() {
        const { title, children } = this.props;

        return (
            <Container>
                {title ? <Title message={title} /> : null}
                {children}
            </Container>
        );
    }
}
