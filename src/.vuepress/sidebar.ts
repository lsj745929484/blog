import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        "portfolio",
        {
            text: "Linux相关",
            icon: "book",
            prefix: "Linux/",
            children: [
                {
                    text: "Linux基础",
                    prefix: "Linux基础/",
                    children: [
                        "Linux 系统文件.md",
                        "Linux 命令集合.md",
                        "Vim 文本编辑器.md",
                        "Linux 用户管理.md",
                        "Linux 文件权限管理.md"
                    ],
                }
            ],
        },
    ],
});
