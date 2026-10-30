# HereOvO / 个人网站

黄丰帆（HereOvO）的个人主页：嵌入式软硬件、固件与机器人系统。
线上地址：<https://hereovo.github.io/>（英文版：<https://hereovo.github.io/en/>）

## 结构

纯静态站点，没有构建步骤，也没有外部依赖（字体、图标全部走系统字体与内联 SVG）。

| 文件 | 作用 |
| --- | --- |
| `index.html` | 中文主页：简介、代表项目、其他项目、技能、奖项、经历、仓库索引、联系 |
| `en/index.html` | 英文主页，内容与中文版一一对应 |
| `styles.css` | 浅色简洁风格（GitHub 页面风格），含响应式断点 |
| `app.js` | 导航高亮与页脚年份 |
| `assets/favicon.svg` | 站点图标（HO 字母标） |
| `assets/og-cover.png` | 社交平台分享预览图（1200×630） |
| `project.html` | 旧版详情页地址兼容，跳转到 `index.html#work` |
| `sitemap.xml` / `robots.txt` | 搜索引擎收录配置 |

## 本地预览

```powershell
py -m http.server 4173
```

然后访问 <http://localhost:4173>。

## 部署

GitHub Pages，从 `main` 分支根目录发布（legacy 构建），推送到 `main` 后自动生效。

## 更新内容

- 改个人介绍 / 教育信息：`index.html` 与 `en/index.html` 的「简介」区块。
- 改项目：两份页面的「代表性项目」「其他项目」「项目索引」三处，注意保持仓库链接一致。
- 改技能：两份页面的「专业技能」区块，标签使用 `span.tag`。
- 改奖项 / 经历：两份页面的「竞赛成果」「项目与竞赛经历」区块。
- 页面配色、字号、间距：`styles.css` 顶部的 `:root` 变量。

## 备注

- 巡检机器人项目代码暂未公开，页面上链接到底盘固件仓库；仓库公开后把链接替换掉即可。
- 页面上只公开姓名、邮箱、GitHub 与城市，未公开电话。
