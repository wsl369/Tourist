
# 旅游攻略网文档

## 主要功能
### 主页: 显示主要旅游景点的信息和图片。
### 搜索功能: 用户可以搜索特定的景点。
### 详细页面: 提供景点的详细信息，包括描述、图片和地图。
### 导航: 用户可以通过导航栏访问不同的页面和功能。

## 项目结构

```
plaintext
Tourist/
├── .vscode/
│   └── settings.json                   # VSCode 配置文件
├── public/
│   └── index.html                      # 入口 HTML 文件
├── src/                                # 源代码目录
│   ├── assets/                         # 静态资源目录
│   │   └── ...                         # 具体资源文件
│   ├── components/                     # 公共组件目录
│   │   └── ...                         # 具体组件文件
│   ├── views/                          # 视图组件目录
│   │   └── ...                         # 具体视图文件
│   ├── App.vue                         # 根组件
│   ├── main.js                         # 项目入口文件
├── .gitignore                          # Git 忽略文件
├── index.html                          # 入口 HTML 文件（同 public/index.html）
├── package-lock.json                   # 锁定依赖版本文件
├── package.json                        # 项目依赖和配置信息
└── vite.config.js                      # Vite 配置文件
```
### 前置条件

确保已经安装 [Node.js](https://nodejs.org/) 和 [npm](https://www.npmjs.com/).

### 安装步骤

1. 克隆项目到本地：
    ```sh
    git clone https://github.com/wsl369/Tourist.git
    cd Tourist
    ```

2. 安装依赖：
    ```sh
    npm install
    ```

3. 运行项目：
    ```sh
    npm run dev
    ```
