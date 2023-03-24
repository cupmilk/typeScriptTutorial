let count = 0; //숫자

count += 1;
//count = "문자열"; //에러발생

const text: string = "hello, ts";

const dome: boolean = true;

const numbers: number[] = [1, 2, 3]; //숫자 배열
const texts: string[] = ["h", "o"]; // 문자배열

//texts.push(1); //'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

let knowUndefined: string | undefined = undefined; //string일수도 undefined일수도
let numOrNull: number | null = null; // number일수도 null일수도

let color: "red" | "white" | "black" = "red";
color = "white";
//color = "orange"; //'"orange"' 형식은 '"red" | "white" | "black"' 형식에 할당할 수 없습니다.
