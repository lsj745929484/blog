import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "Linux相关",
      icon: "book",
      prefix: "Linux/",
      children: "structure",
    },
  ],
});
