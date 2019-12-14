// @flow
import * as React from 'react';
import { RadioButton } from '../';

const initialProps = {
    value: true,
    onValueChange: () => {},
};

const mockComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return render(<RadioButton {...finalProps} />);
};

describe('<RadioButton />', () => {
    it('renders component correctly with default props', () => {
        const component = mockComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
            <View
              accessibilityLabel="checkbox"
              accessible={true}
              focusable={true}
              hitSlop={
                Object {
                  "bottom": 10,
                  "left": 10,
                  "right": 10,
                  "top": 10,
                }
              }
              isTVSelectable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                  "paddingBottom": 2,
                  "paddingLeft": 2,
                  "paddingRight": 2,
                  "paddingTop": 2,
                }
              }
            >
              ≺SVG colour="rgb(51, 73, 91)" type="SINGLE_CHOICE_ON" /≻
            </View>
        `);
    });

    it('renders component correctly when off', () => {
        const props = { value: false };
        const component = mockComponent(props).toJSON();

        expect(component).toMatchInlineSnapshot(`
            <View
              accessibilityLabel="checkbox"
              accessible={true}
              focusable={true}
              hitSlop={
                Object {
                  "bottom": 10,
                  "left": 10,
                  "right": 10,
                  "top": 10,
                }
              }
              isTVSelectable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                  "paddingBottom": 2,
                  "paddingLeft": 2,
                  "paddingRight": 2,
                  "paddingTop": 2,
                }
              }
            >
              ≺SVG colour="rgb(204, 210, 214)" type="SINGLE_CHOICE_OFF" /≻
            </View>
        `);
    });
});
