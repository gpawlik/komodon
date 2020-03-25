import * as React from 'react';
import { create } from 'react-test-renderer';
import { Screen } from '../';

jest.mock('~/components/header', () => ({
    Header: 'Header',
}));

jest.mock('../styles', () => ({
    Container: 'Container',
    Content: 'Content',
    ScrollContent: 'ScrollContent',
}));

const initialProps = {
    children: null,
};

const mockComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return create(<Screen {...finalProps} />).toJSON();
};

describe('<Screen />', () => {
    it('renders component correctly with default props', () => {
        const component = mockComponent({});

        expect(component).toMatchInlineSnapshot(`
            <Container>
              <Header />
              <Content />
            </Container>
        `);
    });

    it('renders component correctly when off', () => {
        const props = { hideHeader: true };
        const component = mockComponent(props);

        expect(component).toMatchInlineSnapshot(`
            <Container>
              <Content />
            </Container>
        `);
    });
});
