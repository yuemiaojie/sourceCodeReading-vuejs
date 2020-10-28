// (function () {
//   a = 1
// })();

// (function (w) {
//   console.log(a)
// })(window)

// console.log(JSON.stringify({ a: 1, b: 2, c: 3 }, function (key, val) {
//   console.log('--->', key, val);
//   if (key === 'a') {
//     return val
//   }
//   return val
// }, 2))

// var a = { a: 1, b: 2 }
// var b = Object.create(a)
// a.b = 3
// b.b = 2
// console.log(b.b);
// console.log(a.b);

// var b = {}
// console.log(b.toSting);

// var target = {
//   age: 10,
//   sex: '男'
// }

// var objA = {
//   age: 18,
//   sex: '男',
//   year: 2020,
//   name: {
//     name: '杰'
//   }
// }

// Object.assign(target, objA)
// objA.year = 2021
// objA.name.name = '杰杰'
// console.log(target);

// var a = {}
// var b = {
//   a: 1
// }
// a = b
// b.a = 2
// console.log(a);

// console.log(Object.create({ a: 1 }, {
//   a: {
//     value: '1'
//   }
// }));

// var o = Object.create(Object.prototype, {
//   // foo会成为所创建对象的---数据属性
//   foo: {
//     enumerable: false,//对象属性是否可通过for-in循环，flase为不可循环，默认值为true
//     writable: true,////对象属性是否可修改,flase为不可修改，默认值为true
//     configurable: true,////能否使用delete、能否需改属性特性、或能否修改访问器属性、，false为不可重新定义，默认值为true
//     value: "goodnice"
//   },
//   // bar会成为所创建对象的 ---访问器属性
//   bar: {
//     configurable: false,
//     get: function () {
//       return 10
//     },
//     set: function (value) {
//       console.log("Setting `o.bar` to", value);
//     }
//   }
// });
// console.log(o, '对象');

// var a = '123'
// a = a.split(',')
// console.log(a);

// function makeMap(
//   str,
//   expectsLowerCase
// ) {
//   var map = Object.create(null);
//   var list = str.split(',');
//   for (var i = 0; i < list.length; i++) {
//     map[list[i]] = true;
//   }
//   return expectsLowerCase ?
//     function (val) {
//       console.log(map, val);
//       return map[val.toLowerCase()];
//     } :
//     function (val) {
//       return map[val];
//     }
// }

// console.log(makeMap('abc,cfff', true)('cfff'));

// var arr = [1, 2, 3]
// console.log(arr.indexOf(2));

// var a = '12'
// var camelizeRE = /-(\w)/g;
// a.replace(camelizeRE, 'd')
// console.log(a);

// var reg = /[awb]/;
// var str = 'ccc'
// console.log(reg.test(str))
// console.log(reg.multiline);
// var str = "Visit W3School.com.cn";
// var patt1 = new RegExp("W3", "m");

// if (patt1.multiline) {
//   console.log("Multiline property is set");
// }
// else {
//   console.log("Multiline property is NOT set.");
// }

// var str = "Is is the cost of of gasoline going up up";
// var patt1 = /\b([a-z]+) \1\b/ig;
// console.log(str.match(patt1));

// class Point {
//   constructor(age) {
//     this.age = age;
//   }
//   toString() {
//     return String(this.age);
//   }
// }

// class PointChild {
//   constructor(props) {
//   }
// }

// const point = new Point(18);
// const pointChild = new PointChild();
// point.call(pointChild, 20)
// console.log('pointChild.age', pointChild.age);
// console.log('point', point.age, 'pointChild', pointChild.age, 'toString', point.toString());

// function Point(age) {
//   this.age = age
//   this.showAge = function () {
//     console.log('this.age', this.age);
//   }
// }

// function PointChild(age) {
//   // Point.call(this, age)
//   this.age = 20
// }

// const point = new Point(18);
// const pointChild = new PointChild(20);

// console.log(point.showAge());

// function point() {

// }

// var a = true;
// var b = true;
// if (a && b) {
//   console.log(1);
// } else {
//   console.log(2);
// }

// (undefined) instanceof Object
// console.log((null).constructor);

// console.log(toString(null));
// console.log(String(null));

// var a = '1'
// var b = 1
// if (a === 0 || a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function cached(fn) {
//   var his = Object.create(null);
//   return function (str) {
//     return his[str] || (his[str] = fn(str));
//   }
// }

// var capitalize = cached(function (str) {
//   return str + '<-->b'
// })
// console.log(capitalize('a'))
// console.log(capitalize('a'))

// var a = function () { };
// __proto__ 相等于构造器的原型
// console.log(a.__proto__ === Function.prototype);
// console.log('__proto__' in {});

// const obj = { p: 1 };
// obj.watch('p', function (id, oldVal, newVal) {
//   console.log(`${id} 《---》 ${oldVal} 《---》 ${newVal}`);
//   return newVal;
// })

// const x = { foo: 1 };
// Object.defineProperty(x, 'foo', ({
//   value: 1, // 值
//   writable: false // 值是否可以通过赋值运算符修改
// }));
// const obj = Object.defineProperty({}, "foo", {
//   writable: false
// });
// console.log('obj', obj);

// var passiveSupported = false;

// try {
//   var options = Object.defineProperty({}, "passive", {
//     get: function () {
//       console.log('get');
//       passiveSupported = true;
//     }
//   });
//   console.log(passiveSupported);
//   window.addEventListener("test", null, options);
//   console.log(passiveSupported);
// } catch (err) { }

// function aa() { var a = 333 }

// alert({ a: 1 });
// 是否可枚举是什么意思？
// 答：通过Object.defineProperty定义属性的枚举，会影响for in、JSON.stringify()、Object.keys()的操作
// var obj = {};
// Object.defineProperty(obj, 'sex', {
//   value: 'male',
//   enumerable: false
// });
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// };
// console.log(JSON.stringify(obj));
// Object.keys(v => {
//   console.log(v);
// });

// var arr = [1, 2, 3];
// var proxy = new Proxy(arr, {
//   get(target, key, receiver) {
//     console.log(target, key, receiver);
//     return Reflect.get(target, key, receiver)
//     return true;
//   },
//   set(target, key, value, receiver) {
//     console.log(target, key, value, receiver);
//   }
// })
// proxy.push(4);

// let mySet = new Set([1]);

// mySet.add({}); // Set [ 1 ]
// console.log('mySet', mySet, Array.from(mySet));
// let o = { a: 1, b: 2 };
// mySet.add(o);

// mySet.add({ a: 1, b: 2 }); // o 指向的是不同的对象，所以没问题

// mySet.has(1); // true
// mySet.has(3); // false

// var fn = function (a) {
//   console.log('fn', a);
// };
// fn.call(null, 1);
// fn(1);

// function Cat() {

// };
// Cat.prototype = {
//   food: "fish",
//   say: function () {
//     console.log("I Love food is :", this.food);
//   }
// }
// var cat = new Cat()
// var dog = { food: "bone" };
// cat.say.call(dog);

// let str = 'abc';
// const reg = /(?:^|[-_])(\w)/g;

// str = str.replace(reg, function (c) {
//   console.log(c);
//   return c.toUpperCase();
// });
// console.log('str', str);

// var a = 10
// var b = 11
// var c = a + b;
// ('x' + 'b').toString()

// console.log(10 >>= 1);
// var a = 1;
// var b = a++;
// while (a === 2) {
//   console.log('a === 0');
//   console.log('b', b);
//   a++;
// }

// 'abc' 1011
// var repeat = function (str, n) {
//   // 结果存放的地方
//   var res = '';
//   while (n) { // n 没到达 0 则循环
//     // 当前位是0是1？ 是 1 的话计入结果，str 是当前位的基数
//     if (n % 2 === 1) { res += str; }
//     // 还有下一位吗？有的话 str 翻倍即为下一位的基数
//     if (n > 1) { str += str; }
//     // 移动到下一位
//     console.log(n, typeof n);
//     console.log(n >>= 1);
//     n >>= 1;
//   }
//   return res
// };

// var res = repeat('abc', 11);
// console.log('res', res);

// var arr = [1, 2, 3];
// for (let index = 0; index < arr.length; index++) {
//   for (let index = 0; index < arr.length; index++) {

//   }
// }
// function generateComponentTrace(vm) {
//   var tree = [];
//   while (vm) {
//     console.log(1);
//     vm = 0
//     // if (tree.length > 0) {
//     //   console.log(vm);
//     //   continue
//     // }
//   }
//   vm = 0
// };

// generateComponentTrace(1);

// const arr = [];
// const n = arr.slice(-1);
// console.log('n', n);
// arr.sort(function (a, b) {
//   console.log(a, b);
//   return a - b;
// })
// console.log('arr', arr);

// for (var i = 0, l = arr.length; i < l; i++) {
//   arr.splice(1, 1)
//   console.log('arr[i]', arr, arr[i]);
// }

// for (var i = arr.length; i > 0; i--) {
//   console.log(1);
//   // do something...
// }

// var arrayProto = Array.prototype;
// var arrMethods = Object.create(arrayProto);
// console.log('arrayProto', arrayProto);
// console.log('arrMethods', arrMethods);
// console.log('arrMethods', arrayProto.prototype === arrMethods.prototype
// );

// var a = function () {
//   console.log('arguments', arguments);
//   console.log('arguments', arguments.length);
//   while (arguments.length--) console.log(111);
// };

// var b = function (a) {
//   a();
// }

// b(a);

// var A = function () {

// };
// var a = new A();
// console.log(a.__proto__ === A.prototype);

// var arr = [];
// Object.defineProperty(arr, '__bo__', {
//   value: 1
// })
// console.log(arr);