//interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법임

// 특정 조건을 준수하게 하기 위해서 interface를 사용 => 클래스가 가져야할 요구사항 작성

interface shape {
  // shape interface를 사용할 경우 getArea라는 함수가 존재해야함
  // 반환값은 number
  getArea(): number;
}

class Circle implements shape {
  //'Circle' 클래스가 'shape' 인터페이스를 잘못 구현합니다.
  // 'getArea' 속성이 'Circle' 형식에 없지만 'shape' 형식에서 필수입니다.

  //   radius: number;
  // constructor : 객체를 생성하는 함수
  // 여기선 radius라는 객체를 생성하기 위해서 쓰여짐
  constructor(public radius: number) {
    this.radius = radius;
  }
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements shape {
  //   width: number;
  //   height: number;
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
//console.log(rectangle.width); // 'width' 속성은 private이며 'Rectangle' 클래스 내에서만 액세스할 수 있습니다.

const shapes: shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
