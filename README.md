# HereOvO / 个人网站

这是黄峰帆的个人项目主页，内容聚焦嵌入式系统、固件、控制和机器人项目。

## 本地预览

这是一个静态 GitHub Pages 网站。可以直接打开 `index.html`，也可以在目录中启动一个静态服务：

```powershell
py -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 部署

当前线上站点使用 GitHub Pages，从 `main` 分支根目录发布。

## 更新项目

项目数据集中放在 `app.js` 的 `projects` 数组中。新增项目时，记得同步更新 `index.html` 里的筛选计数。
