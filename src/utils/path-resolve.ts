import * as path from 'path';
import * as vscode from 'vscode';

interface AliasConfig {
    [alias: string]: string
}

export function resolvePath(
    workspaceRoot: string,
    importPath: string,
    basePath: string,
    pluginConfig: vscode.WorkspaceConfiguration
) {
    const { alias = {}, openFileExtension = 'ts' } = pluginConfig;
    const keys = Object.keys(alias);
    const prefix = importPath.substring(0, importPath.indexOf('/'));
    if (importPath.startsWith('.')) {
        // 相对路径
        return path.resolve(path.dirname(basePath), `${importPath}.${openFileExtension}`);
    }
    // 别名处理
    if (keys.includes(prefix)) {
        const aliasPath = alias[prefix];
        const relativePath = importPath.slice(prefix.length);
        return path.resolve(path.resolve(workspaceRoot, aliasPath), `./${relativePath}.${openFileExtension}`);
    }
    // 是否是依赖，即 node_modules
    const depPath = vscode.Uri.file(path.resolve(workspaceRoot, `node_modules/${importPath}.js`));
    return path.resolve(depPath.path);
}
