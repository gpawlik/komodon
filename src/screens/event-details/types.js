// @flow
export type OwnProps = {|
    id: string,
|};

export type StateProps = {|
    title: string,
    location: string,
    eventStart: number,
    content: string,
    organizer: string,
    organizerUrl: string,
    eventUrl: string,
    imageUrl: string,
|};

export type Props = StateProps;
