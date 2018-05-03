// 测试babel把es6语法转换成es5
// 箭头函数多个参数写法
let first = (a, b) => a * b
console.log('first', first(2, 4))

// 数组解构 a=1 b =2 c=a+b
let f = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;
f();  // 6

// 箭头函数 ,单个参数写法
let second = a => a * 2
console.log('second',second(2))