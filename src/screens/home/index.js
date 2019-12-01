// @flow
import { connect } from 'react-redux';

import { toggleNavigation } from '~/domains/ui/actions';

import { HomeComponent } from './component';
import type { DispatchProps } from './types';

const mapDispatchToProps: DispatchProps = {
    toggleNavigation,
};

export const Home = connect(
    null,
    mapDispatchToProps
)(HomeComponent);
