module.exports = {
    presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
    plugins: [
        [
            'module-resolver',
            {
                root: '/',
                alias: {
                    '~': './src',
                },
                extensions: ['.android.js', '.android.ts', '.ios.js', '.ios.ts', '.js', '.ts', '.tsx'],
            },
        ],
    ],
};
