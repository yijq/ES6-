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
>   > -这只是关于babel的一个简单地介绍，还有补充语法相关的垫片pollyfill模块 ······ 等等，新世界的大门为你敞开。
        


2. let与const的基本用法

3. 变量的解构赋值
>   函数参数的解构赋值还不理解，后面的用途中，部署了Iterator的对象不了解，输入模块的指定方法也不了解。

4. 字符串的扩展
>   这一节大部分都是字符串新增的方法，主要用于处理两字节字符，字符模板，标签模板 ····· 等等。仅大致浏览了每个方法，后面要用到再来细看吧。

