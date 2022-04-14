import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { merge as WebpackMerge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import baseConfig from './webpack.base.js'

const prodConfig: webpack.Configuration = WebpackMerge(baseConfig, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
});

export default prodConfig;