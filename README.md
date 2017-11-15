# file2string
load file to string for pomelo
### 设计起源
* 项目中使用redis已很普遍,为了保证redis指令的原子性和顺序,往往会借助lua去执行.
* 我希望lua可独立出自己的文件,即可重复利用,也可独立编辑无需牵扯在业务代码里.
### 插件用途
* 读取文件内容,并以string的格式被读到内存,以方便程序使用.
* 以lua文件为例,延伸到支持读取所有类型的文件.
### 注意
* 若文件中是json格式的内容,应该以object的格式被读到内存.详情参见[json2memory](https://github.com/luckyqqk/json2memory.git)
### 使用方法
* 进入pomelo项目game-server下
```
npm install file2string --save
```
* 在pomelo项目config下,创建file2string文件夹,进入file2string,创建config.json
```
{
  "development": "/app/data/lua", // 你的lua文件目录
  "production": "/app/data/lua"   // 你的lua文件目录
}
```
* 在需要使用文件数据的地方调用以下代码
```
require('file2string').getFileString('fileName'); // 'fileName'是配置中的文件目录中的某个文件名
```
### 版本说明
* 1.0.0
