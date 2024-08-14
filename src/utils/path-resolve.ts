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
    const prefix = importPath.substring(0, importPath.indexOf('/'));
    if (importPath.startsWith('.')) {
        // 相对路径
        return path.resolve(path.dirname(basePath), `${importPath}.ts`);
    }
    // 别名处理
    if (keys.includes(prefix)) {
        const aliasPath = aliasConfig[prefix];
        const relativePath = importPath.slice(prefix.length);
        return path.resolve(path.resolve(workspaceRoot, aliasPath), `./${relativePath}.ts`);
    }
    // 是否是依赖，即 node_modules
    const depPath = vscode.Uri.file(path.resolve(workspaceRoot, `node_modules/${importPath}.js`));
    return path.resolve(depPath.path);
}
