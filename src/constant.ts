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


export function isMiniPresetComponent(name: string) {
    return wechatMiniProgramComponents.includes(name);
}