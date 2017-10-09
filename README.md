### Record the process of learning node

#### 记录学习nodejs的部分例子

1. 写个简单的路由小案例 test1
    * 根据路径区分teacher、student的学号

2. 读写文件 test2
    * fs.existsSync        //判断文件是否存在
    * fs.writeFileSync   //写入文件,
    * fs.readFile  //读取文件

3. 读写文件中了解Nodejs的同步与异步编程 test3
    * 读取文件夹中的文件夹名称,存入数组。探索Nodejs同步与异步
    * test3_fs.js 中因为for循环的执行速度快于回调函数,所以回调函数执行的到最后会输出三个同样的文件名。因为读取的i是data.length的长度。所以回调函数使用的也是同一个实例。
        * [ 'dir3' ]
        * [ 'dir3', 'dir3' ]
        * [ 'dir3', 'dir3', 'dir3' ]
    * test3_fs2.js 通过使用迭代器，强行把异步转换成同步。
    * test3_fs3.js for循环+匿名函数,构建同步写法/forEach,同步写法

4. 简单路由 test4
    * 根据路由跳转到相应的页面。
    * 路径不存在,跳转到指定的错误页面。
    * 根据传入的后缀,返出请求头相应的content-type mime类型 

5. 了解Node.js的包管理 test5
    * node-modules 放在这里面的文件夹名称,可以直接引用。自己设一个npm不存在的模块,比如 abc,放入node-modules里面，可以直接require('abc')引入
    * npm init 初始化一个package.json

6. 通过原生nodejs写一个简单的post请求 test6
    * 简易的post请求,  获取表单提交数据
    * 利用formidable模块实现文件的上传

7. 了解express框架 test7
    * 了解express常用语句,app.set,app.get,app.rander,app.use等 