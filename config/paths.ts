import fs from 'fs';
import path from 'path';
import * as process from "process";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export const paths = {
    resolveApp,
    appPublic: resolveApp('public'),
    appSrc: resolveApp('src'),
    appDist: resolveApp('dist')
}