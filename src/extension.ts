import * as vscode from 'vscode';
import { resolvePath } from './utils/path-resolve';
import { getComponentNameAtPosition } from './utils/wxml-parser';
import { isMiniPresetComponent } from './constant';

async function readJsonFromUri(path: string): Promise<any> {
    try {
        // 读取文件内容
        const fileContent = await vscode.workspace.fs.readFile(vscode.Uri.file(path));
        // 将文件内容从 Uint8Array 转换为字符串
        const contentString = Buffer.from(fileContent).toString('utf8');
        // 将字符串解析为 JSON 对象
        const jsonObject = JSON.parse(contentString);
        return jsonObject;
    } catch (error: any) {
        return null;
    }
}

const getCompLocation = async (componentName: string, document: vscode.TextDocument) => {
    const { uri } = document;
    // 读取 uri 路径下的 index.json 中的内容
    const { usingComponents } = await readJsonFromUri(uri.path.replace('.wxml', '.json'));
    const compImportPath = usingComponents?.[componentName];
    if (!compImportPath) {
        return;
    }
    const pluginConfig = vscode.workspace.getConfiguration('wxml-jump-to-component');
    const resolvedPath = resolvePath(
        vscode.workspace.workspaceFolders?.[0].uri.path || '',
        compImportPath,
        uri.path,
        pluginConfig
    );
    if (!resolvedPath) {
        return;
    }
    return new vscode.Location(vscode.Uri.file(resolvedPath), new vscode.Position(0, 0));
};

export function activate(context: vscode.ExtensionContext) {
    const provider = {
        provideDefinition(
            document: vscode.TextDocument,
            position: vscode.Position,
            token: vscode.CancellationToken
        ): vscode.ProviderResult<vscode.Definition> {
            const componentName = getComponentNameAtPosition(document, position);
            if (componentName && !isMiniPresetComponent(componentName)) {
                return getCompLocation(componentName, document);
            }
            return;
        },
    };

    context.subscriptions.push(
        vscode.languages.registerDefinitionProvider({ scheme: 'file', language: 'wxml' }, provider)
    );
}

export function deactivate() {}
