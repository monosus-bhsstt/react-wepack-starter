import * as webpack from "webpack";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import chalk from "chalk";

import { paths } from "./paths.js"

const rules: webpack.RuleSetRule[] = [
    {
        test: /\.(js|ts|jsx|tsx)$/,
        include: paths.appSrc,
        use: [
            {
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015',
                },
            }
        ]
    }
];

const baseConfig: webpack.Configuration = {
    entry: {
        index: ['./src/index.tsx']
    },
    output: {
        path: paths.appDist,
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
            '@': paths.appSrc,
        },
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            'node_modules',
            paths.appSrc,
        ],
        symlinks: false,
    },
    module: {
        rules: rules
    },
    plugins:[
        new ProgressBarPlugin({
            format: ` :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
            total: 100
        }) as { apply(...args: any[]): void; },
    ],
}

export default baseConfig;