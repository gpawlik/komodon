// @flow
import { connect } from 'react-redux';

import { getUserFirstName, getUserSecondName, getUserLocation, getUserIsActive } from '~/domains/user/selectors';
import { changeActive } from '~/domains/user/actions';
import type { StateProps, DispatchProps } from './types';

import { UserInfoComponent } from './component';

export const mapStateToProps = (state: any): StateProps => ({
    firstName: getUserFirstName(state),
    secondName: getUserSecondName(state),
    location: getUserLocation(state),
    isActive: getUserIsActive(state),
});

const mapDispatchToProps: DispatchProps = {
    changeActive,
};

export const UserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfoComponent);
