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
/* -------------------------------------------------------------------------- */
/*                                     7강                                     */
/* ----------------------------------------------------------------------
---- */
// 더 엄격한 타입지정
// Literal types
var 엄격한이름;
var 엄격한숫자;
// 유니온타입도 가능
// 자동완성 힌트도 줌
var 접니다;
접니다 = "대머리";
접니다 = "솔로";
// 함수에서도 더 엄격하게 지정기능
function 엄격한함수(x) {
    return 1; // 1,0
}
엄격한함수("hello");
function 가위바위보(x) {
    return [x];
}
console.log(가위바위보("가위"));
// const 변수의 한계 - 오브젝트 안에 내용은 바꿀 수 있음
// Literal type은 const 변수 업글버전 느낌
var 변수 = "kim";
var 업글변수;
// Literal type의 문제점
var 자료 = {
    name: "kim",
};
function 내자료함수(a) { }
// 자료.name -> kim
// 내자료함수("kim"); -> 작동잘됨
// 내자료함수(자료.name); -> 에러남
// kim이라는 자료만 들어올 수 있다? ❌
// kim이라는 타입만 들어올 수 있다? ✅
// 함수에서 이미 "kim"이라는 타입만 a에 들어올 수 있도록 정의 ✅
// 해결책1 -> 오브젝트 변수에서 Literal type 지정해버리기
var 자료2 = {
    name: "kim",
};
// 해결책2 -> as 문법을 사용하여 속이기
내자료함수(자료.name);
// 해결책3 -> as const 키워드 사용
// 가장 간편한 방법
// 효과1. object value 값을 그대로 타입으로 지정해줌
// 효과2. object 속성들에 모두 readonly 붙여줌
var 자료3 = {
    name: "kim",
};
var 함수8강 = function (a) {
    return 2;
};
var 회원정보 = {
    name: "kim",
    age: 22,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (a) {
        console.log(a);
    },
};
회원정보.plusOne(2);
회원정보.changeName("지훈");
var cutZero = function (a) {
    if (a.charAt(0) === "0") {
        return a.slice(1);
    }
    else {
        return a;
    }
};
cutZero("0문자");
cutZero("10문자");
var removeDash = function (a) {
    return Number(a.replace(/-/g, ""));
};
removeDash("010-1234-5678");
var callbackCutAndDash = function (string, zero, dash) {
    var result1 = zero(string);
    var result2 = dash(result1);
    return result2;
};
callbackCutAndDash("0323-1", cutZero, removeDash);
/* -------------------------------------------------------------------------- */
/*                                     9강                                     */
/* ----------------------------------------------------------------------
---- */
// HTML 조작시 narrowing 하는 방법 5개
// 방법1 - null 체크하기
var title1 = document.querySelector("#title");
if (title1 != null) {
    title1.innerHTML = "하이요";
}
// 방법2 - instanceof 연산자 (가장 많이 쓸거임)
var title2 = document.querySelector("#title");
if (title2 instanceof Element) {
    title2.innerHTML = "하이요";
}
// 방법3 - as 로 확정짓기 (확실할때만 사용)
var title3 = document.querySelector("#title");
title3.innerHTML = "하이요";
// 방법4 - 옵셔널 체이닝 사용하기
var title4 = document.querySelector("#title");
if (title4 === null || title4 === void 0 ? void 0 : title4.innerHTML) {
    title4.innerHTML = "하이요";
}
// 방법5 - tsconfig.json 에서 strict 모드 끄기
// 링크 href 조작하기
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
// 버튼 event 조작하기
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("Click !!");
});
// 숙제1
var image1 = document.querySelector(".image1");
var changeButton = document.querySelector(".changeButton");
changeButton === null || changeButton === void 0 ? void 0 : changeButton.addEventListener("click", function () {
    if (image1 instanceof HTMLImageElement) {
        image1.src =
            "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg";
        image1.alt = "고양이";
    }
});
// 숙제2
var allLink = document.querySelectorAll(".naver");
allLink.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
        link.innerHTML = "전부 카카오로 바뀜";
    }
});
/* -------------------------------------------------------------------------- */
/*                                     12강                                     */
/* ----------------------------------------------------------------------
---- */
var Person2 = /** @class */ (function () {
    function Person2(a, b) {
        this.name = a;
        this.age = b;
    }
    Person2.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person2;
}());
var 사람1 = new Person2("kim", 24);
var 사람2 = new Person2("park", 50);
// console.log(사람1.name);
사람1.함수("지훈");
// 숙제1
var Car = /** @class */ (function () {
    function Car(model, price) {
        (this.model = model), (this.price = price);
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var sonata = new Car("Sonata", 3000);
// console.log(sonata.tax());
// 숙제2
var Word = /** @class */ (function () {
    function Word() {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        var numProps = [];
        var strProps = [];
        props.forEach(function (a) {
            if (typeof a === "number") {
                numProps.push(a);
            }
            else if (typeof a === "string") {
                strProps.push(a);
            }
        });
        this.num = numProps;
        this.str = strProps;
    }
    return Word;
}());
var obj = new Word("kim", 1, 2, "park");
var 네모 = { color: "red", width: 100 };
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000, card: false },
    { product: "삼다수", price: 800, card: true },
];
var calc = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
// console.log(calc.minus(1, 2));
