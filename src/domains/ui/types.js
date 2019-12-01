// @flow
export type Action<TPayload> = {|
    type: string,
    payload: TPayload,
    error?: boolean,
|};

export type SelectFilterPayload = Action<{|
    name: number,
|}>;
