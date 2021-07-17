source map 方便我们在日常开发中的调试，映射转换后的代码和源代码的关系。

#### 项目准备

`npm init -y` 准备一个 package.json

安装项目相关的 npm 包

```
npm i webpack webpack-cli babel-loader @babel/core @babel/preset-env html-webpack-plugin -D
npm i serve -g
```

#### 创建文件

`src/main.js`
`src/heading.js`
`webpack.config.js`

#### webpack.config.js

加入不同的sourcemap进行，并利用webpack打包成相关的产物

#### 利用 serve dist 运行项目

浏览器上查看：`localhost:5000`

#### 调试

选择不同sourcemap模式下文件，调试错误

