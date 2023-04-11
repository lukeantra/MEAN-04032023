console.clear();
// //day1
// javascript vs node.js
// javascipt = ECMAScript + web.api
// node.js = ECMAScript + node.api

// console.log('hello world');

// ---------------primitive data and non-primitive data---------------
// number string boolean null undefined -> immutable
// var str = 'abc';

// console.log(typeof str);
// console.log(typeof (str));
// console.log(typeof 123);
// console.log(typeof null);

// object array -> mutable

// let a = 5;
// let b = a;
// a = 6;

// console.log(a);
// console.log(b);

// var a = 5;
// function foo(input) {
//     input = 6;
// }

// foo(a);
// console.log(a);

// var obj = {name: 'Dio'};
// function bar(obj) {
//     // obj.name = 'Jojo';
//     obj = {name: 'Jojo'};
//     console.log(obj);
// }

// bar(obj);
// console.log(obj);


//-----------------------------coercion-----------------------------------
// console.log(true + false);
// console.log(0 + '1');
// console.log(0 - '1');
// console.log('1' - 0);
// console.log('1' - '0');

// const a = { age: 12 };
// const b = { name: 'tt' };
// const c = {};
// c[a] = 456;
// c[b] = 745;

// console.log(c[a]);
// console.log(c[b]);
// console.log(c);

//-----------------------------== vs ===-----------------------------------
// https://dorey.github.io/JavaScript-Equality-Table/

// console.log(true === 1);

// if ('1') {
//     console.log('empty string');
// }

//-----------------------------var vs. let vs. const-------------------------
//                    var     |      let    |      const
// hoisting            yes           yes            yes
// scope             function       block          block
// inital value      undefined       -               - 

// var a = 5;
// function foo() {
//     var num = undefined;
//     if ('') {
//         var num = 62;
//     }
//     console.log(num);
// }

// foo();

// function foo() {

//     if ('1') {
//         console.log(num);
//         //...let num 
//         let num = 62;
//     }
//     // console.log(num);
// }

// foo();

// oop

// function Person(name, age) {
//     this.name = name;
//     this.age = age
// }

// const dio = new Person('Dio', 18);
// console.log(dio);

// Person.prototype.run = function () {
//     console.log(`${this.name} is running`);
// }

// dio.run();

// dio.__proto__.walk = function () {
//     console.log(`${this.name} is walking`);
// }
// console.log(Person);
// dio.walk();

// const jojo = new Person('Jojo', 20);
// jojo.walk();

// after ES6

// class Person {
//     #name;
//     #age;

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }

//     walk() {
//         console.log(`${this.#name} is walking`);
//     }
// }

// const p =  new Person('Dio', 18);
// p.walk();

// p.name = 'Jojo';
// p.walk();

// console.log(p.name);

// class Employee extends Person {
//     #salary;
//     constructor(name, age, salary) {
//         super(name, age);
//         this.#salary = salary;
//     }
//     get salary() {
//         return this.#salary;
//     }

// }

// const e = new Employee('Dio', 18, 1000);

// console.log(e.salary);

// console.log(p);
// console.log(e);
// e.walk();


// Prototype chain

// //Day2

// Loop
// const arr = [1, 2, 3, 4, 5, 'test'];
// arr = {
//   '0': 1,
//   '1': 2
// }
// console.log(arr['5']);

// // const obj = {a: 1, 1: 2, 2: 3, 3: 4}
// console.log(arr[2]);
// // console.log(arr.2);
// // console.log(obj.'2');
// // console.log(obj['a']);

// for (let i = 0; i < arr.length; i++) {
//   console.log(typeof i);
// }


// // for (let item of arr) {
// //     console.log(item);
// // }

// const obj = {
//   name: 'TT',
//   age: 23
// };

// // keys, values, entries
// Object.entries(obj).forEach(([key, val]) => {
//   console.log('key: ', key, 'value: ', val);
// });

// for (let key in arr) {
//   console.log(typeof key, key);
// }

//let vs. const

// Array methods: myForEach myMap myFilter myReduce


// console.log(arr);

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

// console.log(
//     arr.myForEach((ele) => {
//         // let a = 2 * ele;
//         console.log(ele)})
// );

// function foo (a) {
//     return a * 2;
// }

// let foo = (a) => {return a * 2};

// console.log(
//     arr.myForEach((ele) => { return ele })
// );

// console.log(
//     arr.map((ele) => { return ele})
// );

// Array.prototype.myMap = function (callback) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(callback(this[i], i, this));
//     }
//     return arr;
// }


// Array.prototype.myFilter = function (callback) {
//     const arr = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) arr.push(this[i])
//     }        

//     return arr
// }

// const newarr = arr.myFilter((ele) => {return ele % 2 === 0});
// console.log(newarr);

// arr = [175, 50, 25];
// const ouput1 = arr.reduce((acc, cur) => {
//     return acc + cur;
// }, 0) 

// 1: 0 + 175 = 175
// 2: 175 + 50 = 225
// 3: 225 + 25 = 250;

// arr = [175, 50, 25];
// const ouput2 = arr.reduce((acc, cur) => {
//     return acc + cur;
// })
// 1: 175 + 50 = 175
// 2: 225 + 50 = 250

// arr = [175, 50, 25];
// const ouput3 = arr.reduce((acc, cur) => {
//     return acc  cur;
// })
// 1: 175 - 50 = 125
// 2: 125 - 25 = 100

// console.log(ouput3);

// Array.prototype.myReduce = function (...args) {
//     // let res;
//     // let index;
//     // if(args.length === 1) { // 
//     //     res = this[0];
//     //     index = 1;
//     // } else {
//     //     res = args[1];
//     //     index = 0;
//     // }
//     // for (let i = index; i < this.length; i++) {
//     //     res = args[0](res, this[i]);
//     // }
//     // return res;
//     // let [acc, index] = args.length === 1 ? [this[0], 1] : [args[1], 0];
//     // for (let i = index; i < this.length; i++) {
//     //     acc = args[0](acc, this[i], i, this);
//     // }
//     // return acc;
// }

// arr = [175, 50, 25];
// const ouput3 = arr.myReduce((acc, cur) => {
//     return acc - cur;
// }, 0)

// console.log(ouput3);

// // destrucure
// const obj = {
//     name: 'Dio',
//     age: 18,
// };
// // const [a, b, c] = [1, 2, 3, 4, 5, 6];

// // const name = obj.name;
// // const age = obj.age;

// const {name: myName, age: myAge} = obj;
// console.log(myName, myAge);

// const [first, last] = [1, 2];
// console.log(first);

// const {links} = {
//     id: 1,
//     name: 'Luke',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };

// console.log(links.find(({name}) => name === 'fox').link);


// rest parameter vs spread operator
// rest parameter
// function foo(...args) {
//     console.log(args);
//     console.log(arguments);
//     console.log(typeof args);
//     console.log(typeof arguments);
// }

// foo(1, 2, 3);

// function foo(num2,...args1) {
//     console.log(args1);
//     console.log(arguments);
//     console.log(num2)
// }

// foo(1, 2, 3);

//spread operator
// const arr = [1, 2, 3];
// const arr1 = [...arr, 4, 5];
// console.log(arr1);

// const obj = {name: 'Dio', age: 18};

// const obj2 = {...obj, height: 6};

// console.log(obj2);

// const arr = [
//   {name: 'AA', age: 1},
//   {name: 'BB', age: 2},
//   {name: 'CC', age: 3},
// ];

// // {AA: 1, BB: 2, CC: 3}

// const foo = (arr) => {
//     return arr.reduce((acc, cur) => {return {...acc, [cur.name]: cur.age} }, {})
// }

// console.log(foo(arr));

// const arr2 = [
//   'AAPL',
//   'MSFT',
//   'BAC',
//   ['JPM', 'TSLA'],
//   ['DOW', 'COIN', 'MMM']
// ]

// // ['AAPL', 'MSFT', 'BAC', 'JPM', 'TSLA', 'DOW', 'COIN', 'MMM']

// const flatten = () => {
//   return arr2.reduce(
//     (acc, curr) => {
//       if (Array.isArray(curr)) {
//         return [...acc, ...curr];
//       }
//       else {
//         return [...acc, curr];
//       }
//     }, []
//   )
// }

// console.log(flatten(arr2));

// //day3
//^ ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];
// // const thired,fourth...

// function solution(...args) {
//   const arr = args.reduce((acc, cur) => {
//     return [...acc, ...cur];
//   }, []);
//   const map = {};

//   arr.forEach((ele) => {
//     map[ele.userid] = {
//       ...{userid: null, name: null, role: null},
//       ...map[ele.userid],
//       ...ele,
//     };
//   });

//   console.log(Object.values(map));
// }
// solution(first, second);


// {
//   2: { userid: 2, name: 'Velen', role: 'Mage' },
//   56: { userid: 56, name: 'Illidan' },

// }

// [
//   { userid: 2, name: 'Velen', role: 'Mage' },
//   { userid: 44, name: 'Cenarius', role: null },
//   ...
// ]

// // object copy: shallow copy vs. deep copy
// const obj = {
//   name: 'Jojo', 
//   age: 30,
//   arr: [1, 2, 3],
//   date: new Date(),
//   // foo: function() {}
// };
// // spread operator, json parse & json stringigfy, structuredClone, cloneDeep()

// // const objcopy = obj;
// // const objcopy = {...obj, arr: [...obj.arr]};
// // obj.arr[0] = 56;
// // console.log(objcopy.arr[0]);

// // const mark = JSON.stringify(obj);
// // const objcopy = JSON.parse(JSON.stringify(obj));
// const objcopy = structuredClone(obj);
// // obj.arr[0] = 56;
// console.log(obj, objcopy);

// iife
// (function () {
//   console.log(2222);
// })();
// }());

// currying
//^ ~~~~~~interview question~~~~~~~~~~~~
// function limitedFunction(a) {

//   return function(b) {
//     return a + b;
//   }
// }

// const fn = limitedFunction(14); // c
// console.log( fn(5) ); // 9

// class CC {
//   c = 123;

//   foo() {
//     console.log(this.c);
//   }
// }
// const cc = new CC(); // c = 123
// cc.foo()

// const callback1 = (a) => a + 2; // 6
// const callback2 = (b) => b * 2; // 12
// const callback3 = (c) => c - 2; // 10
// // const callbackN

// console.log( runAll(callback1, callback2, callback3)(6) ); // 10

// function runAll(...args) {

//   return function(num) {
//     return args.reduce((acc, cur) => cur(acc), num);
//     // return callback3(callback2(callback1(num)));
//     // let toRet = num;
//     // for(const callback of args) {
//     //   toRet = callback(toRet);
//     // }
//     // return toRet;
//   }
// }

// function limitedFunction(a) {
//   return function(b) {
//     return a + b;
//   }
// }
// const fn = limitedFunction(4); // c
// fn(5);

// const target = function(a, b, c) {
//   return a * b - c;
// }
// const fn  = limitedFunction(3, target);
// fn(3, 4, 4); // 7  // counter[3]
// fn(6, 4, 4); // 10 // counter[2]
// fn(8, 4, 4); // over limited! // counter[1]
// fn(3, 7, 4); // over limited! // counter[0]
// fn(4, 4, 4); // over limited! // counter[0]
// fn(1, 4, 4); // over limited! // counter[0]
// fn(11, 4, 4); // over limited! // counter[0]

// const fn1  = limitedFunction(6, target); 
// fn1(3, 4, 4); // 7  // counter[6]
// fn1(6, 4, 4); // 10 // counter[5]
// fn1(8, 4, 4); // over limited! // counter[4]
// fn1(3, 7, 4); // over limited! // counter[3]
// fn1(4, 4, 4); // over limited! // counter[2]
// fn1(1, 4, 4); // over limited! // counter[1]
// fn1(11, 4, 4); // over limited! // counter[0]

// function limitedFunction(num, target) {

//   let counter = num;

//   return function(...args) { // rest
//     if (counter > 0) {
//       console.log(target(...args)); // spread 
//       counter--;
//     } else {
//       console.log('over limited!');
//     }
//   }
// }
// const target3 = ele => {
//   console.log(ele + 3);
// }
// const target5 = ele => {
//   console.log(ele + 5);
// }
// const target100 = ele => {
//   console.log(ele + 100);
// }
// const target = function (n) {
//   return ele => {
//     console.log(ele + n);
//   }
// }
// const arr = [1, 2, 3];
// arr.forEach(target(6));

// this: use in a function, target to a obj
// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }
// (function() {
//   console.log(this);
// })()

// hello = 'hi';
// console.log(this.hello);

// const obj = {
//   name: 'TT', 

//   subobj: {
//     age: 45,
//     foo: function() {
//       // "use strict";
//       console.log('foo: ', this); //----- <--------
  
//       const bar = () => {
//         console.log('bar: ', this);
//       }
//       bar(); //----- <--------
//     }
//   },

//   baz: () => {
//     console.log('baz: ', this.hello);
//   }
// };
// obj.baz();


// const obj = {
//   hello: 'David'
// }

// function getName(num1, num2) { // n
//   console.log(this.hello, num1, num2);
// }
// const getNamePlus = getName.bind(obj); // 1 arg
// getNamePlus(1, 2);

// getName.call(obj, 1, 2); // 1 + n
// getName.apply(obj, [1, 2]); // 1 + [n]

// rxjs, of, from

// call apply bind

//arrow funtion
// const foo = () => {}
// const bar = function() {
  
// }
// bar(1, 2, 3, 4);

// //Day4

// Event Loop

// XHR

// Callback function callback hell

// Promise

// Myfetch

// //Day5

// todolist 

// 'use strict'

// this.hello = 'hello';
// console.log(this);
// function foo() {
//   console.log(this.hello);
// }
// module.exports.foo = foo;
// console.log(module.exports);

// "use strict";

// function sum(a, b) {
//   total = a + b; // ReferenceError: total is not defined
//   return total;
// }

// console.log(sum(2, 3)); // This line won't be executed
