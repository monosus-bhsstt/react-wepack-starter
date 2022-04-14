import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { merge as WebpackMerge } from 'webpack-merge';

import baseConfig from './webpack.base.js'

const devConfig: webpack.Configuration = WebpackMerge(baseConfig, {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
});

export default devConfig;