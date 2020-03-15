// @flow
import * as React from 'react';

import { Screen } from '~/components/screen';

import { generalIcons } from '~/constants/icons/general';
import { SVGIcon } from '~/icons';

import { HeaderBox, SubTitle, ContentBox, ContentText } from './styles';

type Props = {};

export class About extends React.PureComponent<Props> {
    render() {
        return (
            <Screen title="About" qaName="about" hasContentScroll>
                <HeaderBox>
                    <SVGIcon type={generalIcons.LOGO} size={120} />
                </HeaderBox>

                <ContentBox>
                    <SubTitle>Welcome to Komodon</SubTitle>
                    <ContentText>
                        Komodon is a new tool designed to help flexible travellers to find the best flight with a single
                        search. Forget about doing a single search for every combination of days that you can travel
                        trying to find the best deal. Komodon can provide you in a single search with all the results
                        for up to 50 combinations of dates. And if you are not convinced with the current prices you can
                        subscribe and receive daily alerts with the new prices.
                    </ContentText>

                    <ContentText>
                        All flight prices in Komodon are provided by Kiwi. When you find the best flight you’ll be
                        redirected to Kiwi to complete your purchase.
                    </ContentText>

                    <SubTitle>What kind of search can I do in Komodon?</SubTitle>
                    <ContentText>
                        Komodon offers different types of departure and return than can be combined together as
                        convenient.
                    </ContentText>

                    <SubTitle>Range of dates</SubTitle>
                    <ContentText>
                        Choose between two different dates for your departure or return. Komodon will search for all the
                        combinations of flights between the selected dates.
                    </ContentText>

                    <SubTitle>Number of days</SubTitle>
                    <ContentText>
                        Choose how many days you want to stay in destiny. Use a range of days and Komodon will search
                        for all the combinations.
                    </ContentText>

                    <SubTitle>Days of week</SubTitle>
                    <ContentText>
                        You can choose the days of the week that best suit you for departure and return. Komodon will
                        generate up to 50 combinations only using the selected days of the week.
                    </ContentText>

                    <SubTitle>Fixed date</SubTitle>
                    <ContentText>
                        The classic search when you are not flexible and you can travel only in a concrete day. Just
                        choose twice the same date using range of dates.
                    </ContentText>

                    <SubTitle>Use cases examples</SubTitle>
                    <SubTitle>Weekend trip</SubTitle>
                    <ContentText>
                        Is there any city you would love to visit for a weekend and you are flexible? You can do a
                        search using Days of week with departure Thursday or Friday and return a Sunday, Komodon will
                        generate combinations of Thursday to Sunday and Friday to Sunday for the next 6 months!
                    </ContentText>

                    <SubTitle>Long trip</SubTitle>
                    <ContentText>
                        Are you planning a long trip in a concreate month and you are flexible? Choose the full month
                        for the Range of dates as departure and maybe 14 to 15 days for the return using Number of days.
                        Komodon will search for flights from day 1 to 15, 1 to 16, 2 to 16, 2 to 17… Up to 50
                        combinations in a single search!
                    </ContentText>

                    <SubTitle>How subscriptions works?</SubTitle>
                    <ContentText>
                        When you do a search you can subscribe to it. You can subscribe with the filters being applied
                        in the search, so Komodon won’t bother you with early morning flights if you are not interested
                        in those. Everyday Komodon will send you a email with the price update for your subscriptions so
                        you don’t need to spend time searching for flights every day looking for a price drop.
                    </ContentText>

                    <SubTitle>How can I unsubscribe?</SubTitle>
                    <ContentText>
                        Login into your account and go to My subscriptions in the navigation bar. You can delete any of
                        your subscriptions.
                    </ContentText>
                </ContentBox>
            </Screen>
        );
    }
}
