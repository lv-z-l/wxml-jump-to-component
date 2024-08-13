import * as path from 'path';
import * as vscode from 'vscode';

interface AliasConfig {
    [alias: string]: string
}

export function resolvePath(
    workspaceRoot: string,
    importPath: string,
    basePath: string,
    aliasConfig: AliasConfig = {}
) {
    const keys = Object.keys(aliasConfig);
    const key = keys.find(key => importPath.startsWith(key));
    // 别名处理
    if (key) {
        const aliasPath = aliasConfig[key];
        const relativePath = importPath.slice(key.length);
        return path.resolve(path.resolve(workspaceRoot, aliasPath), `./${relativePath}.ts`);
    }
    if (importPath.startsWith('.')) {
        // 相对路径
        return path.resolve(path.dirname(basePath), `${importPath}.ts`);
    }
    // 是否是依赖，即 node_modules
    const depPath = vscode.Uri.file(path.resolve(workspaceRoot, `node_modules/${importPath}.js`));
    return path.resolve(depPath.path);
}
