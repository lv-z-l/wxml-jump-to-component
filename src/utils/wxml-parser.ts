import * as vscode from 'vscode';

export function getComponentNameAtPosition(
    document: vscode.TextDocument,
    position: vscode.Position
): string | undefined {
    const range = document.getWordRangeAtPosition(position, /<\w+(-\w+)*\b/);
    if (range) {
        const word = document.getText(range);
        const match = word.match(/<(\w+(-\w+)*)\b/);
        if (match) {
            return match[1];
        }
    }
    return undefined;
}
