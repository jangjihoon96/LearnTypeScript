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

/* -------------------------------------------------------------------------- */
/*                                     5강                                     */
/* ----------------------------------------------------------------------
---- */

// Narrowing으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

function 내로잉함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내로잉함수(123);
내로잉함수("123");

function 내로잉함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  }
}
내로잉함수2(11);
내로잉함수2("11");

// assertion 문법
// 1. 타입을 확정지을 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
// 굳이 쓰지 않음 (버그 추적이 어려움, ts의 이점이 없어짐)
function 어썰션함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number; // 타입 덮어쓰기 (x를 number로)
}
어썰션함수(123);

/* -------------------------------------------------------------------------- */
/*                                     6강                                     */
/* ----------------------------------------------------------------------
---- */

// type 변수 만들기
type AnimalType = string | number | undefined;
let 동물: AnimalType = 123;

// type 변수 만들기2
type Animal2Type = { name: string; age: number };
let 동물2: Animal2Type = { name: "kim", age: 20 };

// type 변수 만들기3 - 읽기전용으로 만들기
// 옵션설정 아래와 같이 name을 써도되고 안써도 될 수 있도록 만듬
type GirlfriendType = { readonly name?: string };
const 여친: GirlfriendType = {
  name: "엠버",
};
// 여친.name = "유라"; - 읽기전용이기에 에러 발생

// type 변수 union type으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기 (extend하기)
type PositionX = { x: number };
type PositionY = { y: number };
type NewPosition = PositionX & PositionY;
let position: NewPosition = { x: 10, y: 20 };

type Homework2 = { color?: string; size: number; readonly position: number[] };

type Homework3 = { name: string; phone: number; email: string };

type Homework4 = { name: string; phone: number; email: string; adult: boolean };

let testHomework4: Homework4 = {
  name: "지훈",
  phone: 123,
  email: "zzz@zz.zz",
  adult: false,
};

/* -------------------------------------------------------------------------- */
/*                                     7강                                     */
/* ----------------------------------------------------------------------
---- */

// 더 엄격한 타입지정
// Literal types
let 엄격한이름: "kim";
let 엄격한숫자: 123;

// 유니온타입도 가능
// 자동완성 힌트도 줌
let 접니다: "대머리" | "솔로";
접니다 = "대머리";
접니다 = "솔로";

// 함수에서도 더 엄격하게 지정기능
function 엄격한함수(x: "hello"): 1 | 0 {
  return 1; // 1,0
}
엄격한함수("hello");

function 가위바위보(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [x];
}
console.log(가위바위보("가위"));

// const 변수의 한계 - 오브젝트 안에 내용은 바꿀 수 있음
// Literal type은 const 변수 업글버전 느낌
const 변수 = "kim";
let 업글변수: "kim";

// Literal type의 문제점
var 자료 = {
  name: "kim",
};
function 내자료함수(a: "kim") {}
// 자료.name -> kim
// 내자료함수("kim"); -> 작동잘됨
// 내자료함수(자료.name); -> 에러남
// kim이라는 자료만 들어올 수 있다? ❌
// kim이라는 타입만 들어올 수 있다? ✅
// 함수에서 이미 "kim"이라는 타입만 a에 들어올 수 있도록 정의 ✅

// 해결책1 -> 오브젝트 변수에서 Literal type 지정해버리기
var 자료2: { name: "kim" } = {
  name: "kim",
};

// 해결책2 -> as 문법을 사용하여 속이기
내자료함수(자료.name as "kim");

// 해결책3 -> as const 키워드 사용
// 가장 간편한 방법
// 효과1. object value 값을 그대로 타입으로 지정해줌
// 효과2. object 속성들에 모두 readonly 붙여줌
var 자료3 = {
  name: "kim",
} as const;

/* -------------------------------------------------------------------------- */
/*                                     8강                                     */
/* ----------------------------------------------------------------------
---- */

// type alias 에 함수 type 저장해서 사용하는 방법
// 함수표현식에서만 type alias 사용가능 (함수선언식은❌)
type 함수8강타입 = (a: string) => number; // 파라미터로 string return값 number 지정
let 함수8강: 함수8강타입 = function (a) {
  return 2;
};

// object 안의 함수 타입지정 방법
type 회원정보타입 = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: (a: string) => void;
};
let 회원정보: 회원정보타입 = {
  name: "kim",
  age: 22,
  plusOne(a) {
    return a + 1;
  },
  changeName: (a) => {
    console.log(a);
  },
};
회원정보.plusOne(2);
회원정보.changeName("지훈");

// 숙제2-1
// 맨앞에 "0"이 들어오면 "0"을 제거하고 반환
type CutZeroType = (a: string) => string;
let cutZero: CutZeroType = (a) => {
  if (a.charAt(0) === "0") {
    return a.slice(1);
  } else {
    return a;
  }
};
cutZero("0문자");
cutZero("10문자");

// 숙제2-2
// 문자열 사이아 "-" 를 제거하고 숫자로 반환
type RemoveDashType = (a: string) => number;
let removeDash: RemoveDashType = (a) => {
  return Number(a.replace(/-/g, ""));
};
removeDash("010-1234-5678");

// 숙제3
type CallbackCutAndDashType = (
  string: string,
  zero: CutZeroType,
  dash: RemoveDashType
) => number;
let callbackCutAndDash: CallbackCutAndDashType = (string, zero, dash) => {
  let result1 = zero(string);
  let result2 = dash(result1);
  return result2;
};
callbackCutAndDash("0323-1", cutZero, removeDash);

/* -------------------------------------------------------------------------- */
/*                                     9강                                     */
/* ----------------------------------------------------------------------
---- */

// HTML 조작시 narrowing 하는 방법 5개
// 방법1 - null 체크하기
let title1 = document.querySelector("#title");
if (title1 != null) {
  title1.innerHTML = "하이요";
}
// 방법2 - instanceof 연산자 (가장 많이 쓸거임)
let title2 = document.querySelector("#title");
if (title2 instanceof Element) {
  title2.innerHTML = "하이요";
}
// 방법3 - as 로 확정짓기 (확실할때만 사용)
let title3 = document.querySelector("#title") as Element;
title3.innerHTML = "하이요";
// 방법4 - 옵셔널 체이닝 사용하기
let title4 = document.querySelector("#title");
if (title4?.innerHTML) {
  title4.innerHTML = "하이요";
}
// 방법5 - tsconfig.json 에서 strict 모드 끄기

// 링크 href 조작하기
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

// 버튼 event 조작하기
let button = document.querySelector("#button");
button?.addEventListener("click", () => {
  console.log("Click !!");
});

// 숙제1
let image1 = document.querySelector(".image1");
let changeButton = document.querySelector(".changeButton");
changeButton?.addEventListener("click", () => {
  if (image1 instanceof HTMLImageElement) {
    image1.src =
      "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg";
    image1.alt = "고양이";
  }
});

// 숙제2
let allLink = document.querySelectorAll(".naver");
allLink.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
    link.innerHTML = "전부 카카오로 바뀜";
  }
});
