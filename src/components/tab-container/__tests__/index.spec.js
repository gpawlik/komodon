// @flow
import * as React from 'react';
import { View, Text } from 'react-native';

import { Tab, LockableTabs } from '../';

const onLayout = () => {};
const width = 320;

describe('<TabContainer /> and <Tab/>', () => {
    it('renders correctly', () => {
        const component = render(
            <LockableTabs tabTitles={['Tab1', 'Tab2']} onLayout={onLayout} width={width}>
                {() => [<Tab key="tab1" />, <Tab key="tab2" />]}
            </LockableTabs>
        ).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('needs at least one tab', () => {
        expect(() => {
            render(
                <LockableTabs tabTitles={['Tab']} onLayout={onLayout} width={width}>
                    {() => <Tab />}
                </LockableTabs>
            );
        }).toThrow();
    });

    it('must have a matching number of titles and tabs', () => {
        expect(() => {
            render(
                <LockableTabs tabTitles={[]} onLayout={onLayout} width={width}>
                    {() => <Tab />}
                </LockableTabs>
            );
        }).toThrow();
    });

    it('supports rendering other views', () => {
        const component = render(
            <LockableTabs tabTitles={['Tab1', 'Tab2']} onLayout={onLayout} width={width}>
                {() => [<View key="tab1" />, <Text key="tab2">Sup</Text>]}
            </LockableTabs>
        ).toJSON();
        expect(component).toMatchSnapshot();
    });
});
