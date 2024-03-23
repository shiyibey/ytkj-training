## JavaScript

### 1.js数据类型

### 基本数据类型(值数据类型)

> Java基本类型:short byte float double char int long boolean

- string:字符串
  - tostring():将数据转换为字符串
- number:表示数字,相当于Java中的int+float,范围是正负 2^53-1
  - NaN:一般在转换时出现,全称为 not a number,表示无法转换,类似一个报错,但其实并不是报错
  - infinity:正无穷
  - -infinity:负无穷
  -  parseInt() -0 +
- boolean:布尔类型 true和false
  - NaN null undefined 0 ' ' false 这些值统称为假值,等同于false
  - 除去上面的值统称为 真值 等同于 true
  - 在js中流程控制是根据真假值判断的,而不是像java一样根据布尔值判断,这是两个语言非常大的差异
  - !!:根据数据的真假值将其转换为布尔,假值为false 真值为true
- null
  - 使用 typeof 可以获取数据的类型,当我们测试 null 的类型时会出现bug,typeof会返回 Object 而不是 null
- undefined：未定义
- bigint(ES8):表示数字,范围超过2^53-1,在结尾添加n表示bigint,与number不是同一种数据类型不能相互计算
- symbol(ES6):表示一个独一无二的数据,在底层开辟专门内存地址

 复杂数据类型(地址数据类型,引用数据类型)

- Object:对象
  - Array:数组
  - Function:函数
  - RegExp:正则表达式
  - Date:内置对象,用来设置日期运算
  - Math:运算对象

### 2.BOM浏览器对象模型(Browser Object Model)

> 提供了与浏览器进行交互的一组接口,存在一定得浏览器差异性
>
> 在BOM中内置了七个对象,这七个对象可以直接使用,每个对象封装很多内置的函数,分别封装了浏览器不同的功能

- window:顶层对象,全局变量,表示整个浏览器窗口
  - document:window子对象,表示页面中的正文部分,通过document可以使用DOM操纵页面结构和样式
  - history:window子对象封装了浏览器中的历史记录 以及缓存等
  - location:window子对象封装了浏览器的地址栏信息,可以操纵页面的跳转等
  - navigator:window子对象封装了用户当前使用的浏览器信息
  - screen:window子对象表示当前用户屏幕的信息,通过此对象可以操纵用户的鼠标信息,屏幕色彩等一系列信息
  - frame:window子对象 已经被淘汰

### 3.DOM文档对象模型(Document Object Model)

> 提供了操纵页面结构 样式 的一组接口,存在严重的浏览器差异性问题
>
> DOM模型主要由以下节点组成

- 文档节点:就是指html页面中的根元素,一般html根元素就是html,只有一个根元素
- 元素节点:就是值页面中的各种元素,通过js选择器可以获取这些元素节点,js选择器如下
  - ES5
    - document.getElementById(id):根据id拿取唯一一个元素,返回元素节点
    - document.getElementsByName(name):根据name属性拿取多个元素,返回一个装满元素节点的类数组(NodeList),类数组是一个集合
    - document.getElementsByTagName(tagName):根据标签名拿取多个元素,返回一个装满元素节点的类数组(NodeList),类数组是一个集合
    - document.getElementsByClassName(class):根据类名拿取多个元素,返回一个装满元素节点的类数组(NodeList),类数组是一个集合
  - ES6
    - document.querySelector('sel'):内部书写css选择器,根据选择器获取唯一一个元素节点
    - document.querySelectorAll('sel'):内部书写css选择器,根据选择器获取多个元素节点,返回一个类数组
- 属性节点:就是指元素节点中的各种属性,格式为 属性名="属性值"
  - 元素节点.setAttribute('属性名','属性值')
  - 元素节点.getAttribute('属性名')
  - 元素节点.removeAttribute('属性名')
- 文本节点:就是页面中的各种文本
- 注释节点:就是页面中的各种注释

### 4.输出方式

JavaScript 能够以不同方式“显示”数据：

- 使用 `window.alert()` 写入警告框
- 使用 `document.write()` 写入 HTML 输出
- 使用 `innerHTML` 写入 HTML 元素
- 使用 `console.log()` 写入浏览器控制台

### 5.引入方式

```html
1:直接将js书写在标签内,类似css行内式,不推荐
<body onload="javascript:alert('你好世界...')">
    
2:直接将绑定的函数名书写在标签内,类似css的内嵌式
注意这里函数内部传递的参数为 实参 
<script>
     alert('你好世界...')
</script>     
```

### 6.函数 Function

函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。

```html
function 函数名(形参|实参){
        函数体
 
}
注意函数肯定存在返回值,
要么是返回return中书写的内容,要么返回undefined
```

### 7.事件

HTML 事件可以是浏览器行为，也可以是用户行为。

以下是 HTML 事件的实例：

- HTML 页面完成加载
- HTML input 字段改变时
- HTML 按钮被点击

通常，当事件发生时，你可以做些事情。

在事件触发时 JavaScript 可以执行一些代码。

HTML 元素中可以添加事件属性，使用 JavaScript 代码来添加 HTML 元素。

```
在js中存在众多事件： 
onclick 单击
ondblclick 双击
onload 载入无误,浏览器解析全文完毕
onblur 失去焦点
onfocus 获取焦点
onchange 
```

### 8.数组Array

#### 	常用的数组函数

​	   splice (删除起始索引,删除元素个数,[替换的值])  

​       push    //尾部追加

​	   unshift  //首部追加

​       forEach  循环 （最基本的for循环效率是最高的,比其他循环效率都高）

​       filter 符合过滤条件的表达式,则返回这个数据,最终组成一个新的数组

​	   find  仅仅返回第一个符合条件的,返回的就是一个值

​	   map  一般不搭配 表达式,如果搭配表达式则仅仅返回

​	   indexOf 返回数组中后面字符的索引,如果无法查询到,则返回 -1

### 9.对象Object

​    可以说 "JavaScript 对象是变量的容器"。

​	但是，我们通常认为 "JavaScript 对象是键值对的容器"。

​	键值对通常写法为 **name : value** (键与值以冒号分割)。

​	键值对在 JavaScript 对象通常称为 **对象属性**。

### 10.深拷贝和浅拷贝

​     **浅拷贝** ：只复制指向某个对象的指针，而不复制对象本身，相当于是新建了一个对象，该对象复制了原对象的指针，新旧对象还是共					  用一个内存块

​	 **深拷贝** ：是新建一个一模一样的对象，该对象与原对象不共享内存，修改新对象也不会影响原对象

​	
