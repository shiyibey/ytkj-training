## Vue 

### 1.使用插值语法

​		在大胡子表达式中显示数据，大胡子表达式中显示数据，大胡子表达式中显示数据，大胡子表达式仅有单向的绑定不能再使用再标签内部

```vue
<tagname>{{ 想要显示的数据 }}</tagname>{{ 想要显示的数据 }}
```

大胡子表达式只中支持表达式的写法，不能书写流程控制，循环等

### 2.指令元素

​		在Vue中存在各种指令元素，这些指令元素以v-开头，每种指令存在不同的功能，都自带单向绑定功能，其中v-model天生支持双向绑定，指令元素只能使用在标签上

```vue
<tagname v-xxx="绑定值"></tagname>
```

​	v-model	  在表单项中使用，对数据进行双向绑定功能，

​					    如果书写在复选框中，双向绑定的值如果真值，则勾选，如果是假值则不勾选，反之主动勾选则绑定的值为true，不勾选，					    则绑定的值为false

​						v-model:不能取反，不能使用 “ ! ”

​	v-text		  向元素中插入文本

​	v-html		 向元素中插入超文本

​	v-once		 一次性的绑定，之后不在存在单向绑定

​	v-band		绑定标签中的属性，属性值由静态写法变为初始化的值

```html
<tagname v-band:属性名="初始化的值"></tagname>
语法糖：
<tagname :属性名="初始化的值"></tagname>
直接省略v-band
```

​	v-on		绑定事件，之后执行函数

```vue
<tagname v-on:事件="函数"></tagname>
如果函数不要传参可以不写括号
语法糖：
<tagname @事件="函数"></tagname>
将@替代为v-on
```

条件渲染		v-if 和  v-show

​	v-if		可以取反，后面绑定的值如果是真值则底层渲染，元素显示如果为假值则底层不渲染，页面不显示，如果v-if绑定的为假值，则				  显示v-else的元素，注意！v-if和v-else必须紧邻，v-if适合用于切换不频繁的场合，切换消耗较大，因为每次都需要重新渲染

```html
<div :class="{boxStyle:value}" v-if="!flag1">
            测试
        </div>
<span v-else-if="value=='color:red'" >红色</span>
<span v-else>元素被隐藏啦</span>
```



​	v-show	可以取反，后面绑定的值如果是真值则底层渲染，元素显示如果为假值，底层依然渲染，但是添加一个display:none的样式，					 页面不显示，不能与v-eles连用，v-show适合用于切换频繁的场合，初始加载消耗比较大，之后每次都不需要渲染

```html
隐藏元素: <input type="checkbox" v-model="flag2">
         <div :class="{boxStyle:value}" v-show="!flag2">
            测试
         </div>
```

​	v-for		用来迭代数据

​		1：迭代数组	v-for="(alias,index) in 循环体"

​							alias:别名

​							index:索引，可以不写，如果只有别名则小括号省略

​							in:可以替换为of

​							那个元素需要迭代，则此指令就写在那个元素上，循环体必须是Vue实例初始化的值

​							此指令可能会有bug，是因为此指使用的是就近策略导致的，此处官方建议加上一个可选组件：key绑定主键，强烈不建							议版面绑定索引

​		2：迭代对象	v-for="(属性值，属性名，index) in 对象"

```html
 引入vue.js依赖之后，可以创建一个Vue对象 
<script>
const vm = new Vue({

	//el是element的简写，使用css选择器拿取管理的模板，此处就是管理的<div id="app"></div> 
	el:'#app',
	//data是Vue实例中初始化的值，这些值都可以在Vue管理的模板上以各种形式显示
	data:{
		message:'你好，世界~',
		myCss:'background-color:rgb(255,0,255)',
 	}
)}
</script>
```

## 3.M V VM思想

- M(Model 模型层)
  - 就是用户书写的data对象
- V(View 视图层)
  - 就是Vue管理的模板
- VM(ViewModel 视图模型层)
  - 就是我们创建的 Vue 实例
- 当M层的数据发生改动,通过VM层的绑定,可以直接修改V层的数据(单向绑定,数据可响应式)
- 当V层模板发生改动,则通过VM层的绑定,同时M层的数据也随之发生改变(双向绑定)

### 4.函数

1：在大胡子表达式中直接书写函数必须书写括号，会直接显示函数的返回值，如果不写括号，则直接打印函数

2：函数写在v-model里面，必须要写括号

```vue
<input type="text" v-model="name()">
<script>
	new Vue({
        el:'#app',
        /*data值只要发生改变，则重新解析DOM生成的虚拟DMO之后，
        Vue实例开始填充数据生成真实的DOM，最后DOM取代虚拟DOM*/
        data:{
            
        }
        /*此处专门写函数*/
        methods:{
            name(){
                
            }
        },
    })
</script>
```



### 5.计算属性

它说一个属性，由现在的属性（一般是data的值）计算得来，计算属性绝对不会添加括号，传递实参，它只是属性

```vue
<input type="text" v-model="etoak">

<script>
	new Vue({
        el:'#app',
        data:{
            
        }
       	computed:{
        	/*写计算属性(简略写法，只用get()方法)*/
        	etoak(){
        		
    		}
    		/*写计算属性(完全写法)*/
            etoak:{
                /*这里就是单向绑定，在读取属性时激发*/
                get(){
                    
                },
                /*这里是双向绑定，当我们修改计算属性的值的时候，
                此函数会获取你输入的字符串，然后对其进行操作*/
                set(value){
                    
                },
            },
        },
    })
</script>
```



### 6.侦听器

侦听器用来侦听一个数据的改变，如果数据改变则侦听器执行

```vue
<input type="text" v-model.number="totalWatch">

<script>
	const vm = new Vue({
        el:'#app',
        data:{
           str:'hello',
           items:[] 
        }
        /*写侦听器（写法1）*/
        watch:{
        /*
            	设置侦听的值
            	侦听的值(newvalue,oldvalue){
    			}
            	传递的两个参数
            		newvalue：更改后的值
            		oldvalue：更改前的值
                        */
            str(newvalue,oldvalue){

            },
            /* 侦听的数据 */
            items:{
                /* 开启深度侦听，因为items是一个数组 */
                deep:true,
                    handler(newValue,oldValue){
                    /* 保存进浏览器 */
                    itemsStorage.save(newValue)
                },
            }
    }
    })
</script>
/*写侦听器（写法2）*/
vm.$watch('侦听的数据',function(新数据,旧数据){
	
})
```



#### 函数、计算属性、侦听器

+ 函数:仅仅支持单向绑定，可以使用在大胡子表达式，中也可以使用在指令元素中，多绑定事件，没有缓存机制，只要被调用则立刻执行

+ 计算属性:默认支持单向绑定，在书写setter之后支持双向绑定，可以使用在大胡子表达式中也可以使用在指令元素中，计算属性仅仅是一个属性，没有括号，不会传值，它是由现有的data中的属性计算而来，最终设置在Vue实例中，存在缓存机制，只有在第一次被读取或者data中依赖的数据发生改变时才会执行，否则一直读取现有的缓存数据

+ 侦听器:用来侦听数据的变化，只要发生更改则立刻执行，侦听器默认只能侦听基本数据类型，不能侦听复杂数据类型，如果想侦听复杂数据类型，则必须开启深度侦听，deep:true

  

### 7.样式渲染

```html
<style>
        .pra1{
            background-color: pink;
        }
        .myClass1{
            background-color: crimson;
        }
        .myClass2{
            background-color: gold;
        }
        .myClass3{
            background-color: navy;
        }
        .myClass4{
            color:plum;
        }

</style>
<body>
    <div id="app">
        <!-- 
            使用Vue来绑定样式一般有两种思路
                1:绑定class属性
                2:绑定style属性 
            	:class="初始化的值"
        -->
        实例：<p :class="test1">绑定class，class后面是初始化的值</p>
     
        <!-- 
            :class="{类名1:boolean,类名2:boolean}" 
            如果类名后的值为真值在，则类名添加，否则无此类名
        -->
        实例：<p :class="{myClass1:flag1,myClass2:flag2}">绑定class，class后面是一个对象</p>

        <!-- :class="[类名1,类名2,类名N]" -->
        实例：<p :class="['myClass3','myClass4']">绑定class，class后面是数组</p>
        
        <!-- 
            :style="{样式名1:初始化的值,样式名2:初始化的值}" 
            样式名必须使用小驼峰格式，不能使用连字符
        -->
        实例：<p :style="{backgroundColor:value1,color:value2}">绑定style，style后面是对象</p>
        
    </div>
    <script src="../node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el:'#app',
            data:{
                test1:'pra1',
                flag1:0,
                flag2:true,
                value1:'aqua',
                value2:'whitesmoke',
            }
        })
    </script>
```

### 8.事件原型

如果函数不传递如何实参，不用书写括号，会自动从底层传递一个事件原型

如果函数中传递了实参，则默认不再传递事件原型，如果需要事件原型，则需要手动传递$event

event:形参表示传递过来的事件原型就表示当前激发的这个事件

event.target:表示事件激发的目标对象，这里就是button元素节点，与js和jQuery的思路不同，Vue一般使用事件原型，refs等拿取元素节点

### 9.过滤器

```vue
<body>
    <div id="app">
        <!-- 
            用来过滤设置的内容 
            {{ 被过滤内容|过滤器名 }}
        -->
        <h3>{{ content | contentFilter }}</h3>
        <!-- 注意过滤器不能与v-model连用，只能绑定的:value -->
        <input type="text" :value="content|contentFilter">
        <hr>
        <h3>{{ content | contentFilter2 }}</h3>
        <!-- 注意过滤器不能与v-model连用，只能绑定的:value -->
        <input type="text" :value="content|contentFilter2">
    </div>
    <script src="../node_modules/vue/dist/vue.js"></script>
    <script>
        /* 
            过滤器分为全局过滤器和局部过滤器 
            全局过滤器
                Vue.filter('过滤器名',function(被过滤的值){

                })

        */
        Vue.filter('contentFilter',function(value){
            if(!value.trim()){
                return ''
            }
            return value.replace('谢谢', '栓Q') 
        })

        new Vue({
            data:{
                /* 设置敏感信息 */
                content:'听我说谢谢你',
            },
            filters:{
                /* 过滤器名 value为形参，就是被过滤的值 */
                contentFilter2(value){
                     if (!value.trim()) {
                        return ''
                    }
                    return value.replace('谢谢', '栓Q') 
                }
            }
        }).$mount('#app')

        /* 
            注意过滤器
                1:不能与v-model连用
                2:过滤器中无法使用this
        */
    </script>
</body>
```

### 10.自定义指令 directive

```html
<script>
   /* 
    在 Vue 中如果自带的指令无法满足我们的需求,则我们可以
            自己创建自定义指令,指令名随意书写,但是不能存在 v- 字符
            因为我们自己创建的指令会自动添加 v- 前缀
            自定义指令分为全局自定义和局部自定义
   
   
   1:全局自定义指令
    可以使用在任意一个Vue实例管理的模板中
    全局自定义指令必须书写在我们的Vue实例之前
    指令名不能存在v-前缀 
    */
    
   


    Vue.directive('指令名',{
        // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        bind(el){
            //渲染样式
        },
        //inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        inserted(el,binding){
            //渲染动作
        },
    })
    
new Vue({
    el:'#app',
    data:{
        content:'thisisetoak',
    },
    /* 局部自定义指令 */
    directives:{
        /* 设置指令名,注意不能有v-前缀 */
        focus:{
            bind(el){
                //渲染样式 
            },
            inserted(el,binding){
                /* 强制激发动作获取焦点 */
                el.focus()
            },
        },
    }
})
    

</script>
```



