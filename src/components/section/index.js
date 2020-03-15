// @flow
import * as React from 'react';

import { Container, Title } from './styles';

type Props = {|
    title?: string,
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
