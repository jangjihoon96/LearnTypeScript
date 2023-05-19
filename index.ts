// 쉬운 예제

let 이름스트링: string = "kim"; // string
let 이름배열: string[] = ["kim", "park"]; // array
let 이름오브젝트: { name: string } = { name: "kim" }; // object
let 이름: string | number = "kim"; // string | number

type MyType = string | number;
let 내타입예제: MyType = "hi";

function 함수(x: number): number {
  // 파라미터로 number, return값 number 지정
  return x * 2;
}

type Member = [number, boolean]; // array에 쓸 수 있는 tuple 타입
let john: Member = [170, true];

// object에 타입지정해야할 속성이 많을 때
type NewMember = {
  [key: string]: string; // [key: string] -> 모든 object 속성이란 뜻
};
let car: NewMember = { name: "k5" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
