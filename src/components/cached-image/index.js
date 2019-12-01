// @flow
import * as React from 'react';
import FastImage from 'react-native-fast-image';

type Props = {
    uri: string,
    priority?: 'normal' | 'low' | 'high',
    resizeMode?: 'stretch' | 'cover' | 'contain' | 'center',
};

export class CachedImage extends React.Component<Props> {
    render() {
        const {
            uri,
            priority = FastImage.priority.normal,
            resizeMode = FastImage.resizeMode.cover,
            ...rest
        } = this.props;

        return (
            <FastImage
                source={{
                    uri,
                    priority,
                }}
                resizeMode={resizeMode}
                {...rest}
            />
        );
    }
}
