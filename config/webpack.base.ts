import * as webpack from "webpack";
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
    mode: 'development',
    entry: {
        index: './src/index.tsx'
    },
    output: {
      filename: '[name].bundle.js',
        path: paths.appDist,
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
    }
}

export default baseConfig;