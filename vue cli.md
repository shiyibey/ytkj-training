## VueCli：脚手架

### 1:什么是Vue-CLI 

1. Vue-CLI 是 Vue 官⽅提供的, ⽤来搭建项⽬脚⼿架的⼯具，它是 Vue.js 开发的标准⼯具，它已经集成 了 webpack , 内置好了很多常⽤配置, 使得我们在使⽤ Vue 开发项⽬时更加的标准化。

###  2:安装Vue-CLI

#### 	全局安装Vue-CLI

```bash
命令:  npm i -g @vue/cli@3.10.0 
```

#### 	安装之后查看版本 

```bash
命令:  vue -V
```

#### 	注意: 

- 如果出现“vue不是内部或者外部命令” 
- 解决⽅案，配置环境变量 
- ⾸先查看 全局安装⽬录 命令 npm root -g npm root -g ，在我的电脑进⼊全局安装⽬录下，找到 vue.cmd 
- 右键计算机，属性=>⾼级系统设置=>环境变量，将 vue.cmd 的路径加⼊环境变量，点击“确定”

### 3:使⽤脚⼿架创建项⽬

```bash
 vue create 项⽬名称
```

#### 	3.1:创建默认项⽬

![image-20221027225635970](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027225635970.png)

​    会提示选择默认（ default ）还是⼿动（ Manually ）,默认的配置⾮常适	合快速创建⼀个新项⽬的原型， ⽽⼿动设置则提供了更多的	选项。这⾥	选择 default ，等待⼀会（如有提示等待，⼀直回⻋执⾏下去就 ⾏）

#### 	3.2:⾃定义创建项⽬

​	

![image-20221027225648537](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027225648537.png)

#### 	3.3选择安装的模块

​	![image-20221027225738150](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027225738150.png)

#### 	这里选择Babel Router即可 空格（选中/取消选中） 方向键上下选择

- ​	Babel:（常⽤）解决兼容性问题,⽀持ES6的代码转译成浏览器能识别的代码 
- ​	TypeScript:是⼀种给JavaScript添加特性的语⾔扩展,增加了很多功能,微软开发的 
- ​	Progressive Web App (PWA) Support:渐进式的Web应⽤程序⽀持 
- ​	Router:（常⽤）是 vue-router 路由。 
- ​	Vuex:是Vue.js应⽤程序的状态管理模式+库 （常⽤）。 
- ​	CSS Pre-processors:（常⽤）⽀持 CSS 预处理器, Sass/Less预处理器。
- ​	Linter / Formatter:（常⽤）⽀持代码⻛格检查和格式化。 
- ​	Unit Testing:⽀持单元测试。
- ​	E2E Testing:⽀持 E2E 测试

![image-20221027225942404](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027225942404.png)

是否使用 history 模式路由，点击回车即可

![image-20221027230123546](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027230123546.png)

把babel、ESLint等配置文件如何保存 默认回车即可

![image-20221027230228932](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027230228932.png)

是否保存本次配置 略过直接回车即可

![image-20221027230332394](C:\Users\15081\AppData\Roaming\Typora\typora-user-images\image-20221027230332394.png)

等待创建完成之后 

执行以x下俩个命令即可运行

```bash
cd 项目名称  //切换到项目内

npm run serve   //运行项目
```

### 各模块功能

⼯程名（不能有⼤写字⺟） 

|-- node_modules: 存放下载依赖的⽂件夹 

|-- public: 存放不会变动静态的⽂件，它与src/assets的区别在于，public⽬录中的⽂件不被 webpack打包处理，会原 样拷⻉到dist⽬录下

​		|-- index.html: 主⻚⾯⽂件 

​		|-- favicon.ico: 在浏览器上显示的图标

|-- src: 源码⽂件夹

​		|-- assets: 存放组件中的静态资源 

​		|-- components: 存放⼀些公共组件 

​		|-- views: 存放所有的路由组件 

​		|-- App.vue: 应⽤根主组件 

​		|-- main.js: 应⽤⼊⼝ js 

|-- .browserslistrc: 指定了项⽬可兼容的⽬标浏览器范围, 对应是package.json 的 browserslist选 项 

|-- .eslintrc.js: eslint相关配置 |-- .gitignore: git 版本管制忽略的配置 

|-- babel.config.js: babel 的配置,即ES6语法编译配置 

|-- package-lock.json: ⽤于记录当前状态下实际安装的各个包的具体来源和版本号等, 保证其他 ⼈在 npm install 项 ⽬时⼤家的依赖能保证⼀致. 

|-- package.json: 项⽬基本信息,包依赖配置信息等 

|-- postcss.config.js: postcss⼀种对css编译的⼯具，类似babel对js的处理 

|-- README.md: 项⽬描述说明的 readme ⽂件



## Element UI   网站快速成型工具

[Element UI 官网]: https://element.eleme.cn

Element UI是一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库，包含了一套设计原则、组件和组件。

Element UI由饿了么前端开源维护，当前版本是2.13.2，是最流行的Vue框架之一。

### npm 安装

```bash
命令: npm i element-ui  -S
```



























