import * as React from 'react';
import { create } from 'react-test-renderer';
import { RadioButton } from '../';

jest.mock('~/icons', () => ({
    SVGIcon: 'SVGIcon',
}));

jest.mock('../styles', () => ({
    Touch: 'Touch',
}));

const initialProps = {
    value: true,
    onValueChange: () => {},
};

const mockComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return create(<RadioButton {...finalProps} />).toJSON();
};

describe('<RadioButton />', () => {
    it('renders component correctly with default props', () => {
        const component = mockComponent({});

        expect(component).toMatchInlineSnapshot(`
            <Touch
              hitSlop={
                Object {
                  "bottom": 10,
                  "left": 10,
                  "right": 10,
                  "top": 10,
                }
              }
              onPress={[Function]}
            >
              <SVGIcon
                colour="rgb(51, 73, 91)"
                type="SINGLE_CHOICE_ON"
              />
            </Touch>
        `);
    });

    it('renders component correctly when off', () => {
        const props = { value: false };
        const component = mockComponent(props);

        expect(component).toMatchInlineSnapshot(`
            <Touch
              hitSlop={
                Object {
                  "bottom": 10,
                  "left": 10,
                  "right": 10,
                  "top": 10,
                }
              }
              onPress={[Function]}
            >
              <SVGIcon
                colour="#bbb"
                type="SINGLE_CHOICE_OFF"
              />
            </Touch>
        `);
    });
});
