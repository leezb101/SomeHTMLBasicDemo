
// var name = "张三";
// var name2 = "李四";
// var age = 23;
// var score = 33.0;
// var height = null;
//
// // console.log(name, name2, age, score, height)
// // console.log(typeof name, typeof name2, typeof age, typeof score, typeof height)
// var newName = name + name2;
// var newName2 = name + name2 + "王二麻子";
//
// console.log(newName, newName2);
//
// var string = 10 + "10";
// var string2 = 10 + 10 + "10";
// var string3 = "10" + 10 + 10;
// var string4 = 10 + 20.0 + "30";
// console.og(string, string2, string3, string4)

// function sum(a, b) {
//     return a + b;
// }
//
// console.log('The sum of 10&20 = ' + sum(10, 20));
//
// function sum2() {
//     var count = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         count += arguments[i];
//     }
//     return count;
// }
// console.log('sum is', sum2(1, 2, 3));


var person = {
    name: 'Victor Lee',
    age: 18,
    action: ['eat', 'run', 'jump'],

    eat: function (something) {
        return this.name + ' eat ' + something
    }
};

console.log(person.name, person.age, person.action[1], person.eat('Bread'));

// // 构造函数一
// function Person() {
//     this.name = null;
//     this.age = 18;
//     this.action = []
//
//     this.eat = function (something) {
//         return this.name + " eat " + something;
//     }
// }
//
// var ps1 = new Person();
// ps1.name = '张三';
//
// var ps2 = new Person();
// ps2.name = '李四';
//
//
// // 构造函数二
// function Person2(name, age, action, eat) {
//     this.name = name;
//     this.age = age;
//     this.action = action;
//     this.eat = function (something) {
//         return this.name + " eat " + something
//         // console.log(this.name + " eat " + something)
//     };
// }
//
// var ps3 = new Person2('王二麻子', '19', ['eat', 'jump', 'run'])
// console.log(ps1, ps2, ps3)

// var name = '又是张三'
//  console.log(name, window.name);
//
// function personsss() {
//     var name = '狗蛋';
// }
//
// personsss();
// window.personsss();

var loca = 'http://www.google.com'
window.location.href = loca