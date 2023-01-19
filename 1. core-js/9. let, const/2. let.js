

// 1. 중복 선언을 허용하지 않음
let x = 3;
// let x = 30;
x = 30;
console.log(x);

// 2. 블록레벨 스코프 지원
let y = '메롱'; //전역 스코프
if (true) {
    let y = 20;
    console.log(`if-y : ${y}`);
}           // for문이 끝난 후의 y 값은? '메롱'
console.log(`global-y : ${y}`);

// 3. 변수 호이스팅을 일으키지 않음     --> ReferenceError: Cannot access 'z' before initialization 오류 발생
z = 100;
console.log(z);

let z;