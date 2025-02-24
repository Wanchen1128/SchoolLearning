# 排序算法可视化

这是一个简单的排序算法可视化项目，旨在展示 **冒泡排序** 和 **插入排序** 的过程。用户可以通过点击按钮，观看排序过程的动态展示。

![image-20250224183743767](C:\Users\60214\AppData\Roaming\Typora\typora-user-images\image-20250224183743767.png)

## 项目结构

- **index.html：**页面结构
- **style.css：**页面样式，用于美化界面
- **script.js：**排序算法与动画效果的实现
- **server.js ：**后端服务器设置，用于提供静态页面
- **package.json：**项目依赖配置文件

## 依赖安装

1. 克隆或下载该项目。
2. 在终端中进入项目目录，运行以下命令来安装依赖：

```bash
npm init -y
npm install express
```

## 启动服务器

```bash
node server.js
```

然后，在浏览器中访问 `http://localhost:3000` 即可查看排序算法可视化效果。

## 技术栈

- **前端**：HTML、CSS、JavaScript
- **后端**：Node.js + Express

## 示例界面

项目加载时，页面会展示一个随机生成的数组，并允许用户通过点击按钮触发排序算法。每个排序操作都会通过动画动态展示数组元素的排序过程。用户可通过刷新页面重置排序数组。

![image-20250224185056991](C:\Users\60214\AppData\Roaming\Typora\typora-user-images\image-20250224185056991.png)

![image-20250224185114994](C:\Users\60214\AppData\Roaming\Typora\typora-user-images\image-20250224185114994.png)