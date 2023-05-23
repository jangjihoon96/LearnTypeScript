// 쉬운 예제
var 이름스트링 = "kim"; // string
var 이름배열 = ["kim", "park"]; // array
var 이름오브젝트 = { name: "kim" }; // object
var 이름 = "kim"; // string | number
var 내타입예제 = "hi";
function 함수(x) {
    // 파라미터로 number, return값 number 지정
    return x * 2;
}
var john = [170, true];
var car = { name: "k5" };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
/* -------------------------------------------------------------------------- */
/*                                     2강                                     */
/* -------------------------------------------------------------------------- */
var 이름2 = "kim";
var 나이2 = 28;
var 결혼했니 = true;
var 지정안함 = undefined; // null도 있음
var 회원들 = ["kim", "park"];
var 회원2 = { name: "kim", age: 26 };
var 회원3 = "park"; // 무조건 지정을 안해줘도 알아서 타입이 지정됨
var 내이름 = "장지훈";
var 내나이 = 28;
var 내가사는곳 = "서울시 강남구";
var 내가좋아하는가수 = {
    name: "파테코",
    song: "rainy day",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
/* -------------------------------------------------------------------------- */
/*                                     3강                                     */
/* -------------------------------------------------------------------------- */
var 회원33 = "kim";
var 어레이3 = [1, "2", 3];
var 오브젝트3 = { a: "123" };
// any를 쓰는 순간 전부 사용가능하지만 타입스크립트 쓰는 의미가 없어짐
var 모든타입;
모든타입 = 123;
모든타입 = true;
모든타입 = "아무거나";
// unknown타입 any보다 안전함
var 언노운;
언노운 = 123;
언노운 = "애니와비슷";
// 안전한 이유
// let 변수3: string = 언노운 // ❌
// 언노운 - 1 // ❌
// string | number 에서는 연산이 안됨
var 나이3;
// 나이3 + 1 ❌
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
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
function 함수4(x) {
    return x * 2;
}
함수4(20);
var 함수44 = function (x) {
    return x * 2;
};
// void (텅 비어있다는 의미)
// return을 하고싶지 않을경우(하면 안되는 경우) 사용
function 함수void(x) {
    1 + 1;
}
// 파라미터를 안쓰고 싶을때 옵셔널체이닝을 사용하거나 undefined 사용
// 밑에 두개는 같은 의미
function 함수파라미터옵션(x) {
    2 + 2;
}
function 함수파라미터옵션2(x) {
    2 + 2;
}
function 콘솔인사(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function 자릿수(a) {
    return a.toString().length;
}
function 결혼가능(money, house, charm) {
    var score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
    else {
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
function 내로잉함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내로잉함수(123);
내로잉함수("123");
function 내로잉함수2(x) {
    var array = [];
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
function 어썰션함수(x) {
    var array = [];
    array[0] = x; // 타입 덮어쓰기 (x를 number로)
}
어썰션함수(123);
var 동물 = 123;
var 동물2 = { name: "kim", age: 20 };
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var testHomework4 = {
    name: "지훈",
    phone: 123,
    email: "zzz@zz.zz",
    adult: false,
};
