"use strict";
//interface , type을 사용하게 될 때 여러 종류의 타입에 대해서 호환을 맞춰야하는 상황에서 사용하는 문법
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
function wrap(param) {
    return {
        param: param,
    };
}
// ? 이건 왜 안됌?
// https://joshua1988.github.io/ts/guide/generics.html#%EC%A0%9C%EB%84%A4%EB%A6%AD%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
// function showName1<Person>(person: Person): void {
//   return console.log(person.name);
// }
function showName2(person) {
    return console.log(person.name);
}
//타입 제너릭을 사용하면 파라미터로 다양한 타입을 넣을 수 있고 타입 지원을 지켜낼 수 있다
var wrapped1 = wrap(10);
var wrapped2 = wrap("some");
var itmes = {
    list: ["a", "b"],
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
    }
    Object.defineProperty(Queue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
