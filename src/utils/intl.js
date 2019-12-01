// @flow
export const isIntlDescriptor = (testee: any) => {
    if (!testee || typeof testee !== 'object') {
        return false;
    }
    const { id, defaultMessage } = testee;
    return !!id && !!defaultMessage;
};
