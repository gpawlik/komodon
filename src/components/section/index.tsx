import * as React from 'react';

import { Container, Title } from './styles';

interface Props {
    title?: string;
    children?: React.ReactNode;
}

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
