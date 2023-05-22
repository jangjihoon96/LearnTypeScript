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

/* -------------------------------------------------------------------------- */
/*                                     2강                                     */
/* -------------------------------------------------------------------------- */

let 이름2: string = "kim";
let 나이2: number = 28;
let 결혼했니: boolean = true;
let 지정안함: undefined = undefined; // null도 있음
let 회원들: string[] = ["kim", "park"];
let 회원2: { name: string; age: number } = { name: "kim", age: 26 };
let 회원3 = "park"; // 무조건 지정을 안해줘도 알아서 타입이 지정됨

let 내이름: string = "장지훈";
let 내나이: number = 28;
let 내가사는곳 = "서울시 강남구";

let 내가좋아하는가수: { name: string; song: string } = {
  name: "파테코",
  song: "rainy day",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

/* -------------------------------------------------------------------------- */
/*                                     3강                                     */
/* -------------------------------------------------------------------------- */

let 회원33: number | string = "kim";
let 어레이3: (number | string)[] = [1, "2", 3];
let 오브젝트3: { a: string | number } = { a: "123" };

// any를 쓰는 순간 전부 사용가능하지만 타입스크립트 쓰는 의미가 없어짐
let 모든타입: any;
모든타입 = 123;
모든타입 = true;
모든타입 = "아무거나";

// unknown타입 any보다 안전함
let 언노운: unknown;
언노운 = 123;
언노운 = "애니와비슷";
// 안전한 이유
// let 변수3: string = 언노운 // ❌
// 언노운 - 1 // ❌

// string | number 에서는 연산이 안됨
let 나이3: string | number;
// 나이3 + 1 ❌

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

/* -------------------------------------------------------------------------- */
/*                                     4강                                     */
/* -------------------------------------------------------------------------- */

// 타입지정된 파라미터는 필수임 (js와 다름)
function 함수4(x: number): number {
  return x * 2;
}
함수4(20);

const 함수44 = (x: number): number => {
  return x * 2;
};

// void (텅 비어있다는 의미)
// return을 하고싶지 않을경우(하면 안되는 경우) 사용
function 함수void(x: number): void {
  1 + 1;
}

// 파라미터를 안쓰고 싶을때 옵셔널체이닝을 사용하거나 undefined 사용
// 밑에 두개는 같은 의미
function 함수파라미터옵션(x?: number): void {
  2 + 2;
}
function 함수파라미터옵션2(x: number | undefined): void {
  2 + 2;
}

function 콘솔인사(x?: string): void {
  if (x) {
    console.log(`안녕하세요 ${x}`);
  } else {
    console.log("이름이 없습니다.");
  }
}

function 자릿수(a: string | number): number {
  return a.toString().length;
}

function 결혼가능(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  } else {
    return "결혼불가";
  }
}
console.log(결혼가능(700, false, "상"));
