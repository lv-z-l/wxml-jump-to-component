import * as vscode from 'vscode';

export const wechatMiniProgramComponents = [
  // 基础视图
  "view",
  "scroll-view",
  "swiper",
  "movable-view",
  "cover-view",

  // 基础内容
  "text",
  "icon",
  "progress",

  // 表单组件
  "button",
  "checkbox",
  "form",
  "input",
  "label",
  "picker",
  "picker-view",
  "radio",
  "slider",
  "switch",
  "textarea",

  // 导航
  "navigator",

  // 媒体组件
  "audio",
  "image",
  "video",
  "camera",
  "live-player",
  "live-pusher",

  // 地图
  "map",

  // 画布
  "canvas",

  // 开放能力
  "open-data",
  "web-view",
  "ad",

  // 导航栏
  "navigation-bar",

  // 自定义组件
  "custom-component",

  // 其他
  "rich-text",
  "functional-page-navigator"
];


const DEFAULT_PAGE_CONTENT = [
  {ext: 'wxml', content: ``},
  {ext: 'ts', content: `import wrapPage from '@utils/page';
wrapPage({
    data: {

    },
    onLoad(query) {
        
    },
    onShow() {
        
    },
    onHide() {
        
    },
    onUnload() {
        
    },
    onShareAppMessage() {
        
    },
})`},
  {ext: 'json', content: `{
    "usingComponents": {},
    "navigationStyle": "navigationStyle",
    "navigationBarTitleText": "navigationBarTitleText"
}`},
  {ext: 'scss', content: ``}
];

const DEFAULT_COMP_CONTENT = [
  {ext: 'wxml', content: ``},
  {ext: 'ts', content: `Component({
    options: {
        pureDataPattern: /^_/,
    },
    behaviors: [],
    properties: {},
    observers: {},
    lifetimes: {
        attached() {},
        detached() {},
    },
    pageLifetimes: {
        show() {},
        hide() {},
    },
    data: {},
    methods: {},
});`},
  {ext: 'json', content: `{
    "usingComponents": {}
}`},
  {ext: 'scss', content: ``}
];

export const getContent = ((page: 0 | 1 = 0) => {
  const pluginConfig = vscode.workspace.getConfiguration('wxml-jump-to-component');
  const exts: string[] = pluginConfig.get('createFileExtension') || [];
  return page ? DEFAULT_PAGE_CONTENT.map((item, i) => ({...item, ext: exts[i]})) : DEFAULT_COMP_CONTENT.map((item, i) => ({...item, ext: exts[i]}));
});

export function isMiniPresetComponent(name: string) {
    return wechatMiniProgramComponents.includes(name);
}