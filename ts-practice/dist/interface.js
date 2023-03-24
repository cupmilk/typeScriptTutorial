"use strict";
//interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법임
var Circle = /** @class */ (function () {
    //'Circle' 클래스가 'shape' 인터페이스를 잘못 구현합니다.
    // 'getArea' 속성이 'Circle' 형식에 없지만 'shape' 형식에서 필수입니다.
    //   radius: number;
    // constructor : 객체를 생성하는 함수
    // 여기선 radius라는 객체를 생성하기 위해서 쓰여짐
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    //   width: number;
    //   height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius);
//console.log(rectangle.width); // 'width' 속성은 private이며 'Rectangle' 클래스 내에서만 액세스할 수 있습니다.
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
