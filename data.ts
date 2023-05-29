// ts파일은 amvient 모듈, 전역에서 변수를 사용가능하도록 되어있음
// 전역이 아닌 로컬 모듈로 만드는 방법
// 빈 오브젝트를 익스포트하기
export {}; // 로컬 모듈로 만듬
let dataA = 10;

// 로컬 모듈에서 글로벌 변수 만들고 싶을 때 declare
declare global {
  type Dog = string;
}
let dataB = { name: "kim" };
