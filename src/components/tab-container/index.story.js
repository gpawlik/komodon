// @flow
import * as React from 'react';
import { Text, PanResponder, ScrollView } from 'react-native';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { story, CenteredWrapper } from '<storybook>/stories/helper';
import { app, components } from '<storybook>/constants';
import { selectors } from '~/core/themes/main';
import { ResponsiveContainer } from '~/components/responsive-container';

import { LockableTabContainer, TabContainer, Tab } from './';

const Outer = styled.View`
    align-self: center;
    background-color: ${selectors.white};
    width: 320px;
    height: 300px;
`;
const Graphite = styled(Tab)`
    background-color: ${selectors.graphite};
`;
const Butter = styled(Tab)`
    background-color: ${selectors.butter};
`;
const Slate = styled(Tab)`
    background-color: ${selectors.slate};
`;
const WhiteText = styled.Text`
    color: ${selectors.white};
`;

const Default = () => {
    const scrollLock = boolean('Scroll lock?', false);
    return (
        <Outer>
            <TabContainer scrollLock={scrollLock} tabTitles={['👋', 'Usage', 'tabTitles', 'Children']}>
                <Butter>
                    <Text>Welcome to TabContainer!</Text>
                    <ScrollView>
                        <Text>
                            Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how to
                            use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how
                            to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see
                            how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to
                            see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe
                            to see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a
                            swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have
                            a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to use.
                            Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to
                            use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how
                            to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see
                            how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to
                            see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe
                            to see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a
                            swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have
                            a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to use.
                            Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to
                            use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how
                            to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see
                            how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to
                            see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe
                            to see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a
                            swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have
                            a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how to
                            use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how
                            to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to see
                            how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe to
                            see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a swipe
                            to see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have a
                            swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to use. Have
                            a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to use.
                            Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how to
                            use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see how
                            to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to see
                            how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe to
                            see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a swipe
                            to see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have a
                            swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to use. Have
                            a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to use.
                            Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how to
                            use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see how
                            to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to see
                            how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe to
                            see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a swipe
                            to see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have a
                            swipe to see how to use. Have a swipe to see how to use. Have a swipe to see how to use.Have
                            a swipe to see how to use. Have a swipe to see how to use.
                        </Text>
                    </ScrollView>
                </Butter>
                <Graphite>
                    <Text>`TabContainer` needs two props: `tabTitles` and `children`</Text>
                </Graphite>
                <Butter>
                    <Text>`tabTitles` is just a list of string titles for the tab buttons, above.</Text>
                    <Text>Note: make sure you have an equal number of `children` as `tabTitles`!</Text>
                </Butter>
                <Slate>
                    <WhiteText>
                        There's also a `Tab` component, which is just a component with `flex: 1`. Any child with this
                        style will render just fine.
                    </WhiteText>
                </Slate>
            </TabContainer>
        </Outer>
    );
};

const WithResponsiveContainer = () => (
    <TabContainer tabTitles={['💛', 'Pretty cool', '⚓', '💓']}>
        <ResponsiveContainer>
            <Butter style={{ borderRadius: 6 }}>
                <Text>With ResponsiveContainer!</Text>
            </Butter>
        </ResponsiveContainer>
        <ResponsiveContainer>
            <Butter style={{ borderRadius: 6 }}>
                <Text>`tabTitles` is just a list of string titles for the tab buttons, above.</Text>
                <Text>Note: make sure you have an equal number of `children` as `tabTitles`!</Text>
            </Butter>
        </ResponsiveContainer>
        <Graphite>
            <Text>`TabContainer` needs two props: `tabTitles` and `children`</Text>
        </Graphite>
        <Slate>
            <WhiteText>
                There's also a `Tab` component, which is just a component with `flex: 1`. Any child with this style will
                render just fine.
            </WhiteText>
        </Slate>
    </TabContainer>
);

const LockTabWrapper = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

type TabWitScrollLockProps = {
    disableTabScroll: () => void,
    enableTabScroll: () => void,
};

const Lock = styled.View`
    background-color: blue;
    height: 100;
    width: 100;
`;

class TabWitScrollLock extends React.Component<TabWitScrollLockProps> {
    panResponder: Object;

    constructor(props) {
        super(props);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: this.handlePress,
            onPanResponderRelease: this.handleRelease,
        });
    }

    handlePress = () => this.props.disableTabScroll();

    handleRelease = () => this.props.enableTabScroll();

    render() {
        return (
            <LockTabWrapper>
                <Text>LockableTabContainer provides two handlers to enable/disable its horizontal scrolling.</Text>
                <Text>Drag the content from outside the square and the tab component will scroll through tabs.</Text>
                <Text>
                    However, if you start dragging from inside the square, you'll see that the component stays on the
                    same tab, no matter how much you may swipe.
                </Text>
                <Text>
                    This feature was specifically designed for the heating control screen - where the dragging gesture
                    in the temperature picker competes with the scrollview for the responder system - but you may find
                    other use-cases for it.
                </Text>
                <Lock {...this.panResponder.panHandlers} />
            </LockTabWrapper>
        );
    }
}

const WithScrollLocking = () => (
    <LockableTabContainer tabTitles={['Lock', 'Graphite', 'Slate', 'Graphite again']}>
        {({ disableTabScroll, enableTabScroll }) => [
            <TabWitScrollLock disableTabScroll={disableTabScroll} enableTabScroll={enableTabScroll} key="tab" />,
            <Graphite key="graphite1" />,
            <Slate key="slate1" />,
            <Graphite key="graphite2" />,
        ]}
    </LockableTabContainer>
);

export default story(`${app}/${components}/TabContainer`)
    .addDecorator(withKnobs)
    .add('Basic', Default)
    .add('With ResponsiveContainer', () => (
        <CenteredWrapper>
            <WithResponsiveContainer />
        </CenteredWrapper>
    ))
    .add('WithScrollLocking', () => (
        <CenteredWrapper>
            <WithScrollLocking />
        </CenteredWrapper>
    ));
