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
// console.log(결혼가능(700, false, "상"));

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
// console.log(가위바위보("가위"));

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
// 회원정보.changeName("지훈");

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

/* -------------------------------------------------------------------------- */
/*                                     12강                                     */
/* ----------------------------------------------------------------------
---- */

class Person2 {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }
  함수(a: string): void {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person2("kim", 24);
let 사람2 = new Person2("park", 50);

// console.log(사람1.name);
// 사람1.함수("지훈");

// 숙제1
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    (this.model = model), (this.price = price);
  }
  tax(): number {
    return this.price / 10;
  }
}

let sonata = new Car("Sonata", 3000);
// console.log(sonata.tax());

// 숙제2
class Word {
  num: number[];
  str: string[];
  constructor(...props: (number | string)[]) {
    let numProps: number[] = [];
    let strProps: string[] = [];
    props.forEach((a) => {
      if (typeof a === "number") {
        numProps.push(a);
      } else if (typeof a === "string") {
        strProps.push(a);
      }
    });
    this.num = numProps;
    this.str = strProps;
  }
}

let obj = new Word("kim", 1, 2, "park");
// console.log(obj.num);
// console.log(obj.str);

/* -------------------------------------------------------------------------- */
/*                                     13강                                     */
/* ----------------------------------------------------------------------
---- */

// object 타입지정시 interface 사용가능
// type 네모Type = {color: string, width: number}
interface 네모Type {
  color: string;
  width: number;
}
let 네모: 네모Type = { color: "red", width: 100 };

// interface 장점 : extends로 복사가능
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

// type alias에서도 extends 가능 (& 기호 사용)
type Animal = { name: string };
type Cat = { age: number } & Animal;

// type vs interface
// interface는 중복선언 가능
// type은 중복선언 불가능
interface Student2 {
  name: string;
}
interface Student2 {
  score: number;
}

// 숙제1
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 숙제2,3
interface Cart {
  product: string;
  price: number;
}
interface NewCart extends Cart {
  card: boolean;
}
let 장바구니: NewCart[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: true },
];

// 숙제4
interface Calc {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}
let calc: Calc = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
// console.log(calc.minus(1, 2));

/* -------------------------------------------------------------------------- */
/*                                     2-1강                                     */
/* ----------------------------------------------------------------------
---- */

// 간략한 문법 설명
// 1. rest parameter 문법
function rest함수(...params: number[]) {
  console.log(params);
}
// rest함수(2, 3, 2, 5, 12, 2);

// 2. spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

// 3. destructuring
let [변수1, 변수2] = ["안녕", 100];
// console.log(변수); // '안녕' 출력
let { student10, age10 } = { student10: true, age10: 20 };
// console.log(student10);
function dest함수({
  student11,
  age11,
}: {
  student11: boolean;
  age11: number;
}): void {
  console.log(student11, age11);
}
// dest함수({ student11: true, age11: 20 });

// 숙제1
const maxValue = (...params: number[]) => {
  // return Math.max(...params);
  let result = 0;
  params.forEach((num) => {
    if (num > result) {
      result = num;
    }
  });
  return result;
};
// console.log(maxValue(5, 2, 1, 1000));

// 숙제2
function Hamsoo({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user, comment, admin);
}
// Hamsoo({ user: "kim", comment: [3, 5, 4], admin: false });

// 숙제3
const Hamsoo2 = ([a, b, c]: (number | string | boolean)[]) => {
  console.log(a, b, c);
};
// Hamsoo2([40, "wine", false]);

/* -------------------------------------------------------------------------- */
/*                                     2-2강                                     */
/* ----------------------------------------------------------------------
---- */

function 함수1(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

// in 키워드로 object narrowing 가능
// 오브젝트의 속성을 찾아줌
type Fish = { swim: string };
type Bird = { fly: string };
function 함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  } else {
    animal.fly;
  }
}

// instanceof로 내로잉 가능
// 오브젝트 instanceof 부모클래스
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// 비슷한 object타입일 경우, literal type을 만들어두면 편함
// 차는 바퀴 4개, 바이크는 2개
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike2 = {
  wheel: "2개";
  color: string;
};
function 함수3(x: Car2 | Bike2) {
  if (x.wheel === "4개") {
    console.log("x는 Car2타입");
  }
}

/* -------------------------------------------------------------------------- */
/*                                     2-3강                                     */
/* ----------------------------------------------------------------------
---- */

// 함수 return 값으로 never을 쓰는 경우
// 1. endpoint가 없는 함수 (끝나지 않는 함수)
// 2. 대부분 쓸모없음 void 타입으로 대체 가능
// never 타입이 등장하는 경우 (1)
function 함수5(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // never 발견
  }
}
// never 타입이 등장하는 경우 (2)
let 함수6 = function () {
  // 이러한 함수표현식에도 never을 내뱉음
  throw new Error();
};

/* -------------------------------------------------------------------------- */
/*                                     2-4강                                     */
/* ----------------------------------------------------------------------
---- */

// TS의 이점
// 객체지향언어 코딩에 필요한 문법을 제공 (class문법에서)
// public private protected static 키워드 등

// 1. public
// public 붙으면 모든 자식들이 이용가능
// 없어도됨. default값으로 사용되고 있음
class User2 {
  public name = "kim";
  constructor(a) {
    this.name = a;
  }
}
let 유저2 = new User2("park");
// console.log(유저2.name);

// 2. private
// class 문법 중괄호 안에서만 사용가능
// 밖으로 노출되면 안되는 정보에 사용
// private은 수정불가가 아님 class 안에서 변경가능
// 만약 밖에서 바꿔주고 싶으면 class안에 함수같은걸 만들어서 사용
class User3 {
  name: string;
  private familyName: string = "kim";
  constructor(a: string) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = "park";
  }
}
let 유저3 = new User3("민수");
유저3.이름변경함수();
// console.log(유저3);

// public 키워드를 사용하여 this. 문법 생략하기
// this.name 생략
class Person3 {
  constructor(public name: string, public age: number) {}
}
let 자식 = new Person3("kim", 24);
// console.log(자식);

/* -------------------------------------------------------------------------- */
/*                                     2-5강                                     */
/* ----------------------------------------------------------------------
---- */

// protected - private과 비슷하지만 조금더 유연함
class User4 {
  //  private x = 10; // 확장된 class에서 x 사용불가❌
  protected x = 10; // 확장된 class에서 x 사용가능✅
}
class NewUser4 extends User4 {
  doThis() {
    this.x = 20; // x 를 사용한 모습
  }
}

// static - 부모 class에 직접 부여됨
// 자식에게 물려주지 않음
// private / protected / public +  static 가능
class User5 {
  static x = 10; // 부모만 사용가능 ex) User5.x
  y = 20; // 자식만 사용가능 ex) 자식5.y
}
let 자식5 = new User5();
// console.log(User5.x);
// console.log(자식5.y);

class User6 {
  static skill = "js";
  intro = User6.skill + "전문가입니다.";
}
let 유저6 = new User6();
console.log(유저6);

User6.skill = "ts";

let 유저61 = new User6();
console.log(유저61);

// 숙제1. x,y,z속성의 특징말하기
class User7 {
  private static x = 10; // 클래스안에서만 수정가능, 부모만 사용가능
  public static y = 20; // 어디서든 수정가능, 부모만 사용가능
  protected z = 30; // 클래스안에서만 수정가능, 부모&확장된class 모두 사용가능
}

// 숙제2. x 속성에 숫자를 더해주는 함수가 필요합니다.
class User8 {
  private static x = 10;
  public static y = 20;
  static addOne(num: number) {
    return User8.x + num;
  }
  static printX() {
    console.log(User8.x);
  }
}
User8.addOne(3); //이렇게 하면 x가 3 더해져야함
User8.addOne(4); //이렇게 하면 x가 4 더해져야함
User8.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

// 숙제3.
// 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
class Square {
  width: number;
  height: number;
  bgcolor: string;
  constructor(a: number, b: number, c: string) {
    this.width = a;
    this.height = b;
    this.bgcolor = c;
  }
  draw() {
    // let container = document.createElement("div");
    // container.classList.add("container");
    let box = document.createElement("div");
    let container = document.getElementsByClassName("box-container")[0];
    const fieldRect = container.getBoundingClientRect();
    const x = Math.random() * (fieldRect.width - 0) + 0;
    const y = Math.random() * (fieldRect.height - 0) + 0;

    box.style.width = this.width + "px";
    box.style.height = this.height + "px";
    box.style.backgroundColor = this.bgcolor;
    box.style.position = "absolute";
    box.style.top = x + "px";
    box.style.left = y + "px";
    container.appendChild(box);
  }
}
let 네모2 = new Square(30, 30, "red");
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();

// 숙제3 해설
// class Square {
//   constructor (public width :number, public height :number, public color :string){
//   }
//   draw(){
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top:${a * 400}px;
//       left:${a * 400}px;
//       width:${this.width}px;
//       height : ${this.height}px;
//       background:${this.color}"></div>`;
//     document.body.insertAdjacentHTML( 'beforeend', square );
//   }
// }

// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()

/* -------------------------------------------------------------------------- */
/*                                     2-6강                                     */
/* ----------------------------------------------------------------------
---- */

import { Name2, 이름4 } from "./a.js";
// console.log(이름4);
let 변수3: Name2 = "kim";

// 2-6강 숙제1
import { Car as Car3, Bike as Bike3 } from "./a.js";
let k5: Car3 = {
  wheel: 4,
  model: "k5",
};
let bik: Bike3 = {
  wheel: 2,
  model: "bike",
};

// 2-6강 숙제2
import { OftenFunc } from "./a.js";
let often: OftenFunc = function (a) {
  console.log(a);
};
// often({ a: 1 });

// 2-6강 숙제3
namespace Dog1 {
  export type Dog = string;
}
namespace Dog2 {
  export interface Dog {
    name: string;
  }
}

let dog1: Dog1.Dog = "bark";
let dog2: Dog2.Dog = { name: "paw" };

/* -------------------------------------------------------------------------- */
/*                                     2-7강                                     */
/* ----------------------------------------------------------------------
---- */

// Generic 함수 - 확장성이 있음, 매번 다른 타입 출력가능
function 함수7<MyType>(x: MyType[]): MyType {
  return x[0];
}
let a = 함수7<number>([4, 2]);
let b = 함수7<string>(["4", "2"]);
// console.log(a + 1);
// console.log(b + 1);

// 타입파라미터 제한두기
interface LengthCheck {
  length: number;
}
function 함수8<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}
let c = 함수8<string[]>(["100"]);

// 숙제1
function 함수9<MyType extends string | string[]>(x: MyType) {
  console.log(x.length);
}
// 함수9<string>("hello");
// 함수9<string[]>(["hello", "d"]);

// 숙제2
interface Animals {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';
function changeObj<MyType>(a: string): MyType {
  return JSON.parse(a);
}
console.log(changeObj<Animals>(data));

// 숙제3
class Person4<MyType> {
  name;
  constructor(a: MyType) {
    this.name = a;
  }
}
let a2 = new Person4<string>("어쩌구");
a2.name; //any 타입이 되었넹

/* -------------------------------------------------------------------------- */
/*                                     2-10강                                     */
/* ----------------------------------------------------------------------
---- */

// tuple type - 위치까지 고려하여 타입지정
// let 멍멍: (string|boolean)[] = ['dog', true]
let 멍멍: [string, boolean?] = ["dog", true];

function 함수10(...x: [number, string]) {
  console.log(x);
}
// 함수10(1, "2");

let arrTuple = [1, 2, 3];
let arrTuple2: [number, number, ...number[]] = [4, 5, ...arrTuple];

// 숙제1
let likethings: [string, number, boolean] = ["마라탕", 12000, true];

// 숙제2
let arr4: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// 숙제3
function 함수11(...rest: [string, boolean, ...(number | string)[]]) {
  console.log(...rest);
}
// 함수11("1", true, "2", 1, 1, 2, 3, 3);

// 숙제4
function 함수12(...rest: [...(string | number)[]]) {
  let params = rest;
  let arrNum: number[] = [];
  let arrStr: string[] = [];
  params.forEach((item) => {
    if (typeof item === "number") {
      arrNum.push(item);
    } else {
      arrStr.push(item);
    }
  });
  let result: [number[], string[]] = [arrNum, arrStr];
  return result;
}
함수12("b", 5, 6, 8, "a");

// function 함수12(...rest :(string|number)[]){

//   let result :[string[], number[]] = [[],[]];

//   rest.forEach((a)=>{
//     if (typeof a === 'string') {
//       result[0].push(a)
//     } else {
//       result[1].push(a)
//     }
//   })

//   return result;
// }

let h: Dog = "kim";

/* -------------------------------------------------------------------------- */
/*                                     2-11강                                     */
/* ----------------------------------------------------------------------
---- */

// d.ts 파일 용도
// 1. 타입 정의 따로 보관할 파일이 필요하면
// 2. 타입 레퍼런스 생성하고 싶으면
import { Age as TestAge } from "./test.d";
let age1: TestAge;

let 나이28: CommonAge = 28;

/* -------------------------------------------------------------------------- */
/*                                     2-12강                                     */

/* ----------------------------------------------------------------------
---- */

// implements
// class 문법 사용시 interface 안에 들어있는 속성을 갖고 있는지 확인해주는 역할
// class에 타입을 할당하고 변형시키는 역할❌
interface Car4Type {
  model: string;
  price: number;
}
class Car4 implements Car4Type {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car4("morning");

interface Car5Type {
  model: string;
  tax: (price: number) => number;
}

// implements는 class의 타입을 체크하는 용도지 할당하는게 아님
class Car5 implements Car5Type {
  model; // any 타입됨
  tax(a) {
    // a 파라미터는 any 타입됨
    return a * 0.1;
  }
}
