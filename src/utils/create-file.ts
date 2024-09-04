import fs from 'fs';
import { getContent } from '../constant';
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
  const pageContent = getContent(1);
  const tasks = pageContent.map(({ ext, content}) => createFile(`${path}/index.${ext}`, content));
  Promise.all(tasks).then(res => {
    vscode.window.showInformationMessage('页面创建成功！');
    vscode.commands.executeCommand('vscode.open', vscode.Uri.file(`${path}/index.${pageContent[1].ext || 'ts'}`));
  }).catch(err => {
    vscode.window.showInformationMessage('页面创建失败！');
  });
}

export function createComponent(path: string) {
  fs.mkdirSync(path, { recursive: true });
  const compContent = getContent(0);
  const tasks = compContent.map(({ ext, content}) => createFile(`${path}/index.${ext}`, content));
  Promise.all(tasks).then(res => {
    vscode.window.showInformationMessage('组件创建成功！');
    vscode.commands.executeCommand('vscode.open', vscode.Uri.file(`${path}/index.${compContent[1].ext || 'ts'}`));
  }).catch(err => {
    vscode.window.showInformationMessage('组件创建失败！');
  });
}