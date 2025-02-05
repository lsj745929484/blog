import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  {
    text: "Linux相关",
    icon: "lightbulb",
    prefix: "/Linux/",
    children: [
      {
        text: "Linux基础",
        icon: "lightbulb",
        prefix: "Linux基础/",
        link: "Linux基础/",
      },
    ],
  },
]);
