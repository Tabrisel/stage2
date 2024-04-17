const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const EslingPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'production';

    const baseConfig = {
        mode: isProductionMode ? 'production' : 'development',
        entry: path.resolve(__dirname, './src/index'),
        output: {
            path: path.resolve(__dirname, './build'),
            filename: 'index.js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/i,
                    use: 'ts-loader',
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            }),
        ],
    };

    if (!isProductionMode) {
        baseConfig.devtool = 'inline-source-map';
        baseConfig.devServer = {
            static: path.resolve(__dirname, './build'),
            open: true,
            hot: false,
        };
        baseConfig.plugins.push(
            new EslingPlugin({
                extensions: ['.ts'],
            })
        );
    }

    return baseConfig;
};
