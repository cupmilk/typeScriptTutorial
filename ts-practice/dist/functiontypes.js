"use strict";
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sumArray(nums) {
    return nums.reduce(function (acc, current) { return acc + current; }, 0);
}
console.log(sumArray([1, 2, 3, 5]));
function showVoid() {
    console.log("이건 반환값의 타입을 알기 애매함");
}
