## 回顾HTML和CSS

# 一.HTML基础配置标签

#### 1.!DOCTYPE 

```html
<!DOCTYPE html>
<!--
    用来提示浏览器本文使用的何种规范版本的html，最新的是html5
    html1~4版本书写与之不同
-->
```

#### 2.html

```html
<html lang="en">
<!--
    html:本标签表示页面正式开始，也被称之为根标签，所有的内容全部嵌套在此标签
    内部，在html和xml中都只有一个根标签
        lang:属性，用来设置本页面为何种语言，默认en英文网页，如果
        此处语言与系统地区不符，则google的翻译会自动弹出，询问是否翻译
        平时上网可开启此功能，开发时不要开启，不是必须
        zh-CN表示中文
-->
```

#### 3.head

```html
<head></head>
<!-- 
    <tagName />
    <tagName>xxxxx</tagName>
    以上的整合标签或者开闭合标签以及内部嵌套的内容，也被称之为元素
    （element） 
    head:被嵌套在html根标签内，一般被称之为根标签的子元素，
    head称之为头信息，一般用来设置页面的编码，关键字 引入css js等信息
-->
```

#### 4.meta

```html
    <!-- 
        meta:设置本文编码
            iso-8859-1
            utf-8
            gb2312
            gbk windows textpad
    -->
    <meta charset="UTF-8">
```

#### 5.title

```html
<!-- 
	title:设置页面的标题 
-->
<title>回顾HTML和CSS</title>
```

#### 6.link

```html
<!--
	link 标签定义文档与外部资源的关系。
	rel:必需。定义当前文档与被链接文档之间的关系。rel 是 relationship的英文缩写
	href:定义被链接文档的位置
-->
<link rel="icon" href="./assets/favicon.ico">
```

#### 7.body

```html
<!-- body:表示页面正文正式开始 -->
 <body> </body>
```



### 二.常用标签

#### 	1.标题:h1

```html
<!-- 
	h1~h6 共有六级标题，随着序号的增大字体减小，自动加粗，自动换行 
-->
<h1>用户注册</h1>
```

#### 2. 链接: a

```html
<!-- 
    a:链接
        链接自带样式，蓝色字体，下划线
        href:链接到目的地
        target:默认是_self 目标页取代当前页
        更改为 _blank 目标页与当前页同时存在
--> 
<a href="./success.html" target="_blank">点我试试</a>
```

#### 3. 表单: form

```html
<!-- 
    form:注意不是from，表示设置一个表单，表单内部的元素称之为表单项
    表单项的类型有很多，可以以各种方式收集用户填写的信息，以键值对的
    方式（key=value）提交到action设置的目的地，一般为提交到后端

    action:表单项中封装的数据提交到的目的地
          服务器路径 （前后端分离项目）：http://www.xxx.com/add
		  本地网页或同服务器请求：./success.html (此处支持相对路径和绝对路径)
                    相对路径:   
                        不以/开头
                        以 ./开头表示从当前目录下寻找
                        以 ../开头表示从上一级目录下寻找
                    绝对路径:
                    以/开头
    method:表示页面提交的方式，存在get和post两种
-->
<form action="./success.html" method="get"></form>
```

#####      3.1 表单项 : input、select

```html
<!-- 
    放置在form中的元素称之为表单项，这些表单项可以以各种手段
    收集用户提交的信息
    1:单行文本输入框
        type="text"
        name:表示键值对的键，可以随意书写
        placeholder:悬浮文本，书写内容时消失
        autocomplete:自动完成，默认记录用户输入的内容，
        注意为安全性考虑一般关闭
        required:表示本表单内容必须填写，否则表单无法提交
        autofocus:自动获取焦点
        value:表示键值对的值，就是用户填写的内容，默认不写
        用户写什么则value就是什么
-->
用户姓名:<input type="text" name="myname" placeholder="请输入用户姓名" autocomplete="off" required autofocus><br>
<!-- 
    2:单行密码输入框
        type="password"
        其它属性同上
-->
用户密码:<input type="password" name="mypass" placeholder="请输入用户密码" required autocomplete="off"><br>
<!-- 
    4:单选框
        type="radio"
        name:表示键值
        value:表示值，也就是最终提交的值
        checked:表示默认选中
-->
性别: <input type="radio" name="gender" value="0" checked>女
<input type="radio" name="gender" value="1">男 <br>
<!-- 
    5:复选框
        type="checkbox"
        name:键
        value:值
        checked:默认选中
-->
爱好: <input type="checkbox" name="hobby" value="soccer">足球
<input type="checkbox" name="hobby" value="travel" checked>旅行
<input type="checkbox" name="hobby" value="running">跑步
<input type="checkbox" name="hobby" value="shopping">购物
<input type="checkbox" name="hobby" value="game">游戏
<br>
<!-- 
    6:下拉列表框 
    selected:默认选中
-->
出差所在地:
<select name="location">
    <option value="jinan">济南</option>
    <option value="qingdao" selected>青岛</option>
    <option value="nanjing">南京</option>
    <option value="shanghai">上海</option>
    <option value="hangzhou">杭州</option>
</select> <br>
<!-- 
    7:邮箱验证 
        type="email"
        此处必须输入一个标准邮箱地址
-->
请输入邮箱地址:<input type="email" name="email" placeholder="请输入邮箱" required><br>
<!-- 
    8:请输入出生日期
        type="date"
        填入的日期格式为    yyyy-MM-dd
-->
出生日期: <input type="date" name="birth" required> <br>
<!-- 
    9:输入数字
        type="number"
        min:最小数据 max:最大数据
-->
成绩: <input type="number" name="result" required min="0"
max="100"><br>
<!-- 
    3:提交和取消按钮
        type="submit" 点击之后则用户输入的内容可以以键值对
        方式提交到action设置的目的地
        type="reset" 重置所有用户填写的内容
        这两个是按钮，不用来传值
        value:表示按钮上书写的文本
-->
<input type="submit" value="注册">
<input type="reset" value="取消">
<!-- 
    10:普通按钮 
    此元素一般绑定js使用，单独点击无效果
-->
<input type="button" value="普通按钮">
```

​                                                                                    

#### 4.表格：table

```html
<!-- 
    table:书写一个表格
        tr:表示一行
        td:表示一列
        th:同样表示一列，与td相同，只是内部文本自动居中
        加粗，一般使用在表头中
        横行竖列
        table>tr>td
        表格有很多中元素和属性，最简单不能再少于以上三个标签
-->
<table class="table">
    <!-- caption:表格标题，不是必须 -->
    <caption>表格标题</caption>
    <!-- thead:用来嵌套表头，一般放置第一行的数据，注意
    此标签不是必须，多搭配css使用 -->
    <thead>
        <tr>
            <th>列1</th>
            <th>列2</th>
            <th>列3</th>
            <th colspan="2">列4</th>
            <!-- 
                表格中一行多少列是固定的，不能随意增删
                如果需要调整，可以采用合并的思路
                colspan="2" 此处表示横向合并单元格
                2表示合并两个
            -->
        </tr>
    </thead>
    <!-- 
        tbody:用来嵌套表格主体，同thead用来设置样式
    -->
    <tbody>
        <tr>
            <td>列1</td>
            <td>列2</td>
            <td>列3</td>
            <td>列4</td>
            <td>列5</td>
        </tr> 
    </tbody>
</table>
```

#### 5.即行内框架：ifarme

```html
 <!-- 引入外部页面到本页面 
                    iframe:引入外部页面
                        src:外部页面的路径
                        frameborder:引入外部页面的边框,默认
                        0无边框
						name:此值可对应a链接的target,当链接点击时,目标页会取代iframe中本身引入的页面
                -->
<a href="./table.html" target="etoak"></a>

<iframe src="./success.html"  frameborder="0"  
        name="etoak">
</iframe>
```

#### 6.图片: image

```html
<!-- 
    img:视图，引入一张图片到本页面
        src:表示图片的源头 source的简写 
        alt:如果引入失败，显示的信息
        title:鼠标悬浮显示的信息
-->
<img src="./assets/etoak.jpg" alt="引入失败"
title="壬寅年来了" width="200px" >
```

### 三.css 

####    1.三种引入方式

```html
<!-- 
    1:内嵌式
        直接将css书写在head标签内，这种引入方式初步的将
        结构和样式解耦，但是解耦不彻底，复用性较差
-->

<style>
    /* 这是css注释写法 */
    h1{
        color:coral;
    }

    div{
        background-color: cadetblue;
    }
</style>
<!-- 
    2:外链式
        链接外部的独立css文件到本页面
        rel:此处表示设置样式表，固定写法
        href:引入外部页面的css文件路径
        将结构和样式完全解耦，代码重用性较好，使用最为广泛
-->

<link rel="stylesheet" href="./css/mystyle.css">
 <!-- 
        3:行内式
            直接将css书写在元素内，这种书写方式严重违背解耦结构和样式
            的原则，但是由于其优先级极高，所以使用场合依然较多
    -->
<p style="background-color: pink;color: navy;">我是一个段落</p>
```

#### 2.Css基本选择器

```html
<style>
/* 
    选择器机制是css首创的获取元素的一种方式，由于其简单易学
    功能强大，所以在之后的很多前端语言中，都借鉴了css选择器机制
    1:标签选择器
        tagName{
            直接使用标签名拿取元素，这种书写方式极少单独使用，
            非常容易引起误选
        } 
     2:类别选择器
            在标签中添加class="类名"
        .className{

        }        
 
    3:id选择器
        #id{
            直接使用#id名作为拿取元素的依据
        }
        id全文唯一，class可以重复，也可以设置多个
*/

</style>
```

#### 3.复合选择器

```html
<style>
/* 
    1:交集选择器
        tagName.class{

        }
        tagName#id{

        }
        由一个标记选择器后面紧跟一个类别或者id，没有空格，必须满足两个条件
        才可以成功选取
 
    2:并集选择器
        sel1,sel2,sel3,selN{

        }
        由一个或者多个基本或者复合选择器用逗号隔开，只要
        满足其中任意一个就可以成功选取
  
    3:后代选择器
        根据左祖先右后代的原则，将具有一定层级关系的元素用
        空格隔开，可以精确拿取具有层级关系的子元素
        tagName tagName{

        } 
    4:全选选择器
        选择所有元素
        *{

        }
*/ 
</style>
```

#### 4.类型（块元素，行内元素）

```html
<style>
/* 
    页面元素类型,css技术将页面中的各种元素分为许多种类
    主要有以下两大类
    1: 块元素(block元素)
        eg:div p ul li table h1-h6 布局元素
        以上元素在开头和结尾自带换行,一行只能书写一个,从上往下
        排列,设置盒子模型有效(14组参数),设置对齐方式有效,设置
        行高有效,整个网页中主要的组成基本上都是块元素
        块元素在不设置其宽度的前提下,与父元素同宽,如果追溯到
        body,则与body也就是浏览器同宽

    2: 行内元素(inline元素,内联元素)
        eg: span label a *img *input等
        以上元素,开头和结尾没有换行,一行可以书写多个,从左
        往右排列,设置盒子模型无效,设置对齐方式无效
        *:被称之为 行内块元素(inline-block)
        是具有块元素特征的行内元素,可以设置盒子模型只有
        img和input

    style="display: block;"
    更改为 块元素
    style="display: inline;"
    更改内联元素
*/ 
</style>
```

#### 5.定位（相对定位，绝对定位）

```html
<style>
/* 
    定位类似将元素搬家,彻底打破默认的标准文本流
    设置比弹性盒子要更加自由 定位分为四种
    以下书写其中较复杂的两种
        1:相对定位
            元素相对于自己原先所在位置的左上角进行定位
            偏移量 top bottom left 和 right
            定位之后元素依然保持原先的类型,原来的位置依然
            被占用
        2:绝对定位
            元素根据其距离最近的定位过的祖先元素的左上角
            进行定位,偏移量与相对定位一致,定位后元素打破原先
            类型,漂浮在页面上,原来的位置被其它元素占用,
            如果没有定位过的最先元素,则根据body也就是浏览器左上角
            进行定位,但是注意!如果使用全局居中布局,则可能出现错误
*/ 
</style>
```

#### 6.盒子模型

在css中将所有的元素看做一个一个的矩形的盒子，这些盒子默认根据标准文本流排列在页面上，盒子都具有四个边框，分为边框外的空间距离（外边距），边框内的空间距离（内边距），以及边框默认情况下边框隐藏不显示，通过border属性可以显示边框

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

#### 7.flex布局（弹性布局）

Flex是Flexible Box的缩写 flex布局表示弹性布局，可以为盒状模型提供最大的灵活性。 任何一种元素都可以指定为flex布局 。

1.采用flex布局的元素被称作容器。 
2.在flex布局中的子元素被称作项目 。

<img src="C:\Users\15081\Desktop\山东易途 & 山东科技大学实训\20200826161110660.png" style="zoom:150%;" />

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。





























