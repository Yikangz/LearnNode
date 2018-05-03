'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 测试babel把es6语法转换成es5
// 箭头函数多个参数写法
var first = function first(a, b) {
  return a * b;
};
console.log('first', first(2, 4));

// 数组解构 a=1 b =2 c=a+b
var f = function f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [1, 2],
      _ref2 = _slicedToArray(_ref, 2),
      a = _ref2[0],
      b = _ref2[1];

  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: a + b },
      c = _ref3.x;

  return a + b + c;
};
f(); // 6

// 箭头函数 ,单个参数写法
var second = function second(a) {
  return a * 2;
};
console.log('second', second(2));
