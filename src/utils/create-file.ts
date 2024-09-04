import fs from 'fs';
import { ComponentContent, PageContent } from '../constant';
import * as vscode from 'vscode';
export function createFile(filePath: string, content: string) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err: any) => {
        if (err) {
            reject(err);
        } else {
            resolve(`File created: ${filePath}`);
        }
    });
  });
  
}

export async function createPage(path: string) {
  fs.mkdirSync(path, { recursive: true });
  const tasks = PageContent.map(({ ext, content}) => createFile(`${path}/index.${ext}`, content));
  Promise.all(tasks).then(res => {
    vscode.window.showInformationMessage('页面创建成功！');
    vscode.commands.executeCommand('vscode.open', vscode.Uri.file(`${path}/index.ts`));
  }).catch(err => {
    vscode.window.showInformationMessage('页面创建失败！');
  });
}

export function createComponent(path: string) {
  fs.mkdirSync(path, { recursive: true });
  const tasks = ComponentContent.map(({ ext, content}) => createFile(`${path}/index.${ext}`, content));
  Promise.all(tasks).then(res => {
    vscode.window.showInformationMessage('组件创建成功！');
    vscode.commands.executeCommand('vscode.open', vscode.Uri.file(`${path}/index.ts`));
  }).catch(err => {
    vscode.window.showInformationMessage('组件创建失败！');
  });
}