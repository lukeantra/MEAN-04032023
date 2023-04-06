
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

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }

    walk() {
        console.log(`${this.#name} is walking`);
    }
}

const p =  new Person('Dio', 18);
p.walk();

p.name = 'Jojo';
p.walk();

console.log(p.name);

class Employee extends Person {
    #salary;
    constructor(name, age, salary) {
        super(name, age);
        this.#salary = salary;
    }
    get salary() {
        return this.#salary;
    }
    
}

const e = new Employee('Dio', 18, 1000);

console.log(e.salary);

console.log(p);
console.log(e);
e.walk();


// Prototype chain

// //Day2

// Loop

// Array methods: myForEach myMap myFilter myReduce

// destrucure

// rest parameter vs spread operator

// object copy

// //day3

// iife

// closure

// currying

// this

// call apply bind

//arrow funtion

// //Day4

// Event Loop

// XHR

// Callback function callback hell

// Promise

// Myfetch

// //Day5

// todolist 
