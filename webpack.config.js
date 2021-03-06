const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const appDirectory = path.resolve(__dirname);

module.exports = () => {
    return {
        mode: process.env.NODE_ENV || 'production',
        context: __dirname,
        entry: ['./index.web.js'],
        output: {
            path: path.resolve(appDirectory, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: false,
                            babelrc: false,
                            presets: ['module:metro-react-native-babel-preset'],
                            plugins: [],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.html$/,
                    use: ['html-loader'],
                },
                {
                    test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf)$/,
                    use: ['url-loader?limit=100000'],
                    parser: { skipStorybook: true },
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
        ],
        resolve: {
            extensions: ['.mjs', '.web.js', '.js', '.json', '.web.ts', '.web.tsx', '.ts', '.tsx'],
            alias: {
                'react-native$': 'react-native-web',
                'styled-components$': 'styled-components/native',
                '~': 'src',
                '@react-native-community/async-storage$': path.resolve(appDirectory, 'src/utils/native/async-storage'),
                'react-native-chart-kit$': path.resolve(appDirectory, 'src/utils/native/chart-kit'),
                'react-native-svg$': path.resolve(appDirectory, 'src/utils/native/svg'),
                'rn-range-slider$': path.resolve(appDirectory, 'src/utils/native/range-slider'),
            },
        },
    };
};
