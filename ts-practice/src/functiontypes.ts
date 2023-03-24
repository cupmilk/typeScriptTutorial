function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(1, 2));

function sumArray(nums: number[]): number {
  return nums.reduce((acc, current) => acc + current, 0);
}

console.log(sumArray([1, 2, 3, 5]));

function showVoid(): void {
  console.log("이건 반환값의 타입을 알기 애매함");
}
