// @flow
export type StateProps = $Exact<{
    destinations: Array<*>,
    lastSearches: Array<*>,
}>;

export type DispatchProps = $Exact<{
    getDestinations: () => {},
}>;

export type Props = { ...StateProps, ...DispatchProps };

export type State = $Exact<{
    value: string,
}>;
