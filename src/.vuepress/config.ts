import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "AlanShelby Blog",
  description: "AlanShelby Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
