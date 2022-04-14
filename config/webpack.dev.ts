import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import baseConfig from './webpack.base.js'

const devConfig: webpack.Configuration= merge(baseConfig, {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
});

export default devConfig;