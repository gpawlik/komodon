import * as React from 'react';
import { Dimensions, ScrollView } from 'react-native';

import { TabBar } from './components/tab-bar';

import { Container, ChildHolder } from './styles';

interface Props {
    tabTitles: Array<string>;
    currentTab: number;
}

export class Tabs extends React.PureComponent<Props> {
    scrollView = null;

    state = {
        width: Dimensions.get('window').width,
        currentIndex: 0,
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.currentTab !== prevProps.currentTab) {
            this.scrollTo(this.props.currentTab);
        }
    }

    onChangeTab = index => {
        this.setState({ currentIndex: index }, () => this.scrollTo(index));
    };

    scrollTo = (index: number) => this.scrollView && this.scrollView.scrollTo({ x: index * this.state.width });

    refScrollView = (scrollView: any) => {
        this.scrollView = scrollView;
    };

    page = ({ index }: { index: number }) => (
        <ChildHolder width={this.state.width} key={index}>
            {this.props.children[index]}
        </ChildHolder>
    );

    onLayout = () => {};

    render() {
        const { children, tabTitles } = this.props;
        const { width, currentIndex } = this.state;
        const tabsCount = React.Children.count(children);

        if (tabsCount !== tabTitles.length) {
            throw new Error(
                `TabContainer: tabItem count must equal child count. You passed ${tabTitles.length} tabTitles and ${tabsCount} renderedChildren.`,
            );
        }
        return (
            <Container onLayout={this.onLayout}>
                <TabBar width={width} selectedIndex={currentIndex} tabItems={tabTitles} onChange={this.onChangeTab} />
                <ScrollView ref={this.refScrollView} horizontal disableScrollViewPanResponder scrollEnabled={false}>
                    {tabTitles.map((_, index) => this.page({ index }))}
                </ScrollView>
            </Container>
        );
    }
}
