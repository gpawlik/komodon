// @flow
export const getDimensions = (
    type: 'screen' | 'window'
): {
    width: number,
    height: number,
    scale: number,
    fontScale: number,
} => {
    const Dimensions = require('react-native').Dimensions;

    try {
        return Dimensions.get(type);
    } catch (err) {
        return {
            width: 0,
            height: 0,
            scale: 0,
            fontScale: 0,
        };
    }
};
