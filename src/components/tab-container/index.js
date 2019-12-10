// @flow
import * as R from 'ramda';
import * as React from 'react';
import { Animated, View, type AnimatedValue, Platform } from 'react-native';

import { noop } from '~/core/utils/fp-helpers';
import { OrientationLayoutAware } from '~/utils/hoc-utils/layoutAware';
import { TopTabBar } from '~/components/top-tabbar';
import { type TextType } from '~/types';

import { Outer, MainSection, Scroller, ChildHolder, Tab as TabComponent, BackGestureStripIOS } from './styles';

type ScrollControlHooks = {
    enableTabScroll: () => void,
    disableTabScroll: () => void,
};

type Props = {
    hideTopTabBar?: boolean,
    hideTabs?: boolean,
    onTabChangeEnd?: (currentTabIndex: number) => void,
    scrollLock?: boolean,
    tabTitles: Array<TextType>,
    currentTab?: number,
};

type LockableProps = Props & {
    children: ScrollControlHooks => React.ChildrenArray<*>,
    qaName?: string,
};

type ElementProps = Props & {
    children: React.ChildrenArray<*>,
    qaName?: string,
};

type InternalProps = {
    onLayout: () => void,
    width: number,
};

type State = {
    currentTab: number,
    scrollX: AnimatedValue,
    previousScrollValue: ?number,
};

const titleise = R.map(title => ({ title }));

export class LockableTabs extends React.PureComponent<LockableProps & InternalProps, State> {
    tabs: React.ChildrenArray<*>;
    scrollView = null;
    allowTabLock = true;

    static defaultProps = {
        scrollLock: false,
    };

    state = {
        currentTab: this.props.currentTab || 0,
        scrollX: new Animated.Value(0),
        previousScrollValue: 0,
    };

    componentDidMount() {
        // if a current tab is set also update the scroll so it doesn't automatically animate on resize
        const { currentTab } = this.props;
        if (currentTab) {
            this.scrollToPage(currentTab, false);
        }

        this.state.scrollX.addListener(this.scrollHandler);
    }

    componentWillUnmount() {
        this.state.scrollX.removeListener(this.scrollHandler);
    }

    refScrollView = (scrollView: ?View) => {
        this.scrollView = scrollView;
    };

    scrollHandler = (event: Object) => {
        const { value: rawValue } = event;
        const { currentTab, previousScrollValue } = this.state;
        const { onTabChangeEnd, width: rawWidth } = this.props;

        // round values for android where scroll values are inconsistent
        const width = Math.floor(rawWidth);
        const value = Math.floor(rawValue);

        const validScrollPosition = value % width === 0;

        this.setState({ previousScrollValue: value });

        if (validScrollPosition) {
            this.allowTabLock = true;
            const tab = value / width;

            if (currentTab !== tab) {
                this.setState({ currentTab: tab });
            }

            // this handler is called twice with the final value to scroll to
            if (value === previousScrollValue) {
                onTabChangeEnd && onTabChangeEnd(tab);
            }
        } else {
            // Disallow the locking of the scroll unless we're on a valid scroll position.
            // This should prevent the scroll locking while between tabs
            this.allowTabLock = false;
        }
    };

    scrollToPage = (tabIndex: number, animated: boolean = true) => {
        if (this.scrollView) {
            this.scrollView.scrollToIndex({ animated, index: tabIndex });
        }
    };

    onChangeTab = (selectedTabIndex: number) => {
        this.setState({ currentTab: selectedTabIndex });
        this.scrollToPage(selectedTabIndex);
    };

    disableTabScroll = () => {
        if (this.scrollView && this.allowTabLock) {
            this.scrollView.setNativeProps({ scrollEnabled: false });
        }
    };

    enableTabScroll = () => {
        if (this.scrollView) {
            this.scrollView.setNativeProps({ scrollEnabled: true });
        }
    };

    onContentSizeChange = () => {
        this.scrollToPage(this.state.currentTab, false);
    };

    page = ({ index }: { index: number }) => <ChildHolder width={this.props.width}>{this.tabs[index]}</ChildHolder>;

    pages = (
        width: number,
        children: ScrollControlHooks => React.ChildrenArray<React.Element<*>> | React.ChildrenArray<React.Element<*>>,
    ): React.ChildrenArray<*> => {
        if (width > 0 && children) {
            if (children instanceof Array) {
                return children;
            }
            return children({
                disableTabScroll: this.disableTabScroll,
                enableTabScroll: this.enableTabScroll,
            });
        }
        return null;
    };

    getItemCount = (data: Array<string>) => data.length;

    getItem = (data: Array<string>, index: number) => data[index];

    getItemLayout = (data: Array<string>, index: number) => ({
        length: this.props.width,
        offset: index * this.props.width,
        index,
    });

    keyExtractor = (item: TextType, index: number) =>
        typeof this.props.tabTitles[index] === 'string' ? this.props.tabTitles[index] : this.props.tabTitles[index].id;

    animatedEvent: AnimatedValue = Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]);

    render() {
        const {
            hideTopTabBar,
            hideTabs,
            scrollLock,
            qaName,
            width,
            tabTitles,
            children,
            onLayout,
            qaProps,
            currentTab: initialCurrentTab,
        } = this.props;
        const { currentTab, scrollX } = this.state;

        if (tabTitles.length < 2) {
            throw new Error(`TabContainer: need at least 2 tabs to render`);
        }

        const outputRange = R.range(0, tabTitles.length);
        const inputRange = outputRange.map(i => Math.round(i * width));
        const scrollXBar = scrollX.interpolate({
            inputRange,
            outputRange,
        });

        this.tabs = this.pages(width, children);

        const tabsCount = React.Children.count(this.tabs);
        if (tabsCount !== tabTitles.length) {
            throw new Error(
                `TabContainer: tabItem count must equal child count. You passed ${tabTitles.length} tabTitles and ${tabsCount} renderedChildren.`,
            );
        }
        return (
            <Outer {...qaProps} isLandscape={hideTopTabBar}>
                {hideTopTabBar || hideTabs ? null : (
                    <TopTabBar
                        width={width}
                        selectedIndex={currentTab}
                        tabItems={titleise(tabTitles)}
                        onChangeTab={this.onChangeTab}
                        scrollX={scrollXBar}
                        qaName={qaName}
                    />
                )}
                <MainSection onLayout={onLayout}>
                    <Scroller
                        ref={this.refScrollView}
                        horizontal
                        pagingEnabled
                        onScroll={this.animatedEvent}
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={!scrollLock}
                        scrollEventThrottle={16}
                        onContentSizeChange={this.onContentSizeChange}
                        renderItem={this.page}
                        data={tabTitles}
                        getItemCount={this.getItemCount}
                        getItem={this.getItem}
                        initialNumToRender={initialCurrentTab ? initialCurrentTab + 1 : 1}
                        getItemLayout={this.getItemLayout}
                        initalScrollIndex={1}
                        keyExtractor={this.keyExtractor}
                    />
                    {Platform.OS === 'ios' && !scrollLock ? <BackGestureStripIOS /> : null}
                </MainSection>
            </Outer>
        );
    }
}

export const LockableTabContainer = React.memo<LockableProps>(props => (
    <OrientationLayoutAware
        render={({ layout }: { layout: { width: number, height: number } }) => (
            <LockableTabs {...props} onLayout={noop} width={layout.width} />
        )}
    />
));

export class TabContainer extends React.PureComponent<ElementProps> {
    children = () => this.props.children;

    render() {
        return <LockableTabContainer {...this.props}>{this.children}</LockableTabContainer>;
    }
}

export const Tab = TabComponent;
