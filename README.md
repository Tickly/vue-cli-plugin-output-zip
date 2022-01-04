# vue-cli-plugin-output-zip
把打包后的文件夹再压缩成为一个zip文件

## 谁需要这个插件
如果你的工作流是这样

- 执行打包命令`vue-cli-service build`
- 打开资源管理器，找到打包生成的目录`dist`
- 右键压缩成`zip`

那么我建议你用此插件，因为只需要把这个加进项目即可使用，<b>无需任何配置。</b>

## 如何使用

以下命令皆可以
- `vue add output-zip`
- `yarn add vue-cli-plugin-output-zip -D`
- `npm i vue-cli-plugin-output-zip -D`

## 参数配置

目前暂时没有提供任何的参数，如果有需要，欢迎提Issue。

## todo

- [x] 打包后输出文件大小
- [x] 自定义压缩格式
