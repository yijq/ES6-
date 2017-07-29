## ES6学习笔记

- 学习ES6的笔记，以笔记的方式让自己的印象更深。

1. babel的安装与使用
>  babel主要用于将ES6的部分语句转化为符合ES5语法的语句。  
>  
>  已经初次尝试了babel的使用，下面是使用babel的简单过程：
>   > 1. 首先需要node环境，在项目的根目录中初始化npm模块。初始化模块后会自动生成package.json文件，主要内容为文件的详细信息，这些内容中比较重要的是配置信息，后面还会用到。  
>   >       `$ npm init`
>   > 2. 安装babel-cli。最好直接在项目中安装，这样就可以减轻项目对环境的依赖。  
>   >       `$ npm install babel-cli --save-dev`
>   > 3. 在package.json中配置scripts字段，以方便使用。  
>   >       `{
                "scripts": {
                    "build": "babel src -d lib"
                },
                "devDependencies": {
                    "babel-cli": "^6.11.4"
                }
            }`
>   > 4. 安装插件，并在package.json中配置字段。  
>   > `$ npm install --save-dev es2015`  
>   > `{"babel":{"presets":["es2015"],"plugins":[]}}`
>   > 5. 最后运行babel，可以在lib中得到编译过后的index.js文件。    
>   > - 这只是关于babel的一个简单地介绍，还有补充语法相关的垫片pollyfill模块 ······ 等等，新世界的大门为你敞开。
        


2. let与const的基本用法
>   没有变量声明提升，暂时性死区，块级作用域，顶层对象的属性。

3. 变量的解构赋值
>   函数参数的解构赋值还不理解，后面的用途中，部署了Iterator的对象不了解，输入模块的指定方法也不了解。
>   在函数的解构赋值的例子中，使用的是解构赋值的默认值和函数参数的默认值。

4. 字符串的扩展
>   这一节大部分都是字符串新增的方法，主要用于处理四字节字符，字符模板，标签模板 ····· 等等。仅大致浏览了每个方法，后面要用到再来细看吧。

5. 正则的扩展
>   对于正则表达式不是很熟悉，用的比较少。ES6中新增的正则的属性与方法使js中的正则更完备了，能够识别四字节字符了，新增了u，y，s修饰符，还有sticky，flags等属性，还有新的构造函数传参的规则，后行断言等等。只是大致浏览了新增的属性与方法，需要用到的时候再来查阅学习。

6. 数值的扩展
>   ES6对数值的扩展中，为Number新添加了几重方法与属性，还未Math对象添加了几种数值处理的方法，主要还是为JavaScript在数据储存的局限性进行补充。

7. 函数的扩展
>   ES6对函数的扩展有，函数参数的默认值，rest参数，严格模式，箭头函数，绑定this，函数参数的尾逗号，后面的尾调用优化还不懂。  

~ 发现写html文档来学习效率太低，知识点就直接在md文档中总结 ~  

8. 对象的扩展
>   属性的简介表示法: ES6允许直接写入变量和函数名作为对象的属性与值  
>   属性名表达式： 直接将表达式放入方括号内作为属性名
>   方法的name属性：返回函数名。（bind创造的函数，Function，Symbol）
>   Object.is(a,b)：比较两个值是否严格相等，-0不等于-0，NaN等于自身
>   Object.assign(target, source1, source2)：用于对象的合并，将源对象的可枚举的属性复制到target对象上（浅拷贝）
>   属性的可枚举性：对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性
>   属性的遍历：for...in...可遍历继承的属性，Reflect.ownKeys(obj)可遍历自身的所有属性
>   __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
>   Object.keys()，Object.values()，Object.entries()
>   对象的扩展运算符：...，结构赋值，扩展运算符
>   Object.getOwnPropertyDescriptors()：ES2017 引入了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。
>   Null传导运算符：?.   。

9. Symbol
>   ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
>   Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
>  属性名的遍历：Symbol作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名,Reflect.ownKeys(obj)也可以遍历得到
>  Symbol.for()：它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。Symbol.keyFor()：返回一个已登记的 Symbol 类型值的key。

10. Set和Map数据结构
>   Set：ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
>   WeakSet：WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet的成员只能是对象，而不能是其他类型的值。其次，WeakSet 中的对象都是弱引用。
>   Map：它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
>   WeakMap：与Map结构类似，也是用于生成键值对的集合。WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。WeakMap的键名所指向的对象，不计入垃圾回收机制。
