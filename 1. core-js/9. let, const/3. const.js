// 상수 - 불변성 + 유일성

// 상수: 불변의 고정값, 유일성
const SALE_RATE = 0.2; //할인율 20%

const PI = 3.14159265; //원주율

// sale_rate = 0.3;

console.log(`sale_rate : ${SALE_RATE}`);

// const 와 객체 (배열, 객체, 함수)        --  객체 배열의 불변성(객체 값이 변하지 않음)
const person = {
    name: '김철수',
    age: 30
};

// 아래 코드처럼 객체 자체가 바뀔 수 없음
// person = {
//     name : '박영희',
//     age : 20
// };

// 객체 안에 있는 데이터값은 바뀔 수 있음
person.name = '고길동';
console.log(person);

const a = 10;

for (let i = 0; i < 5; i++) {
    
}

// 배열, 객체, 함수 선언 시 const
// 값이 변경될 때는 let

// 즉, javascript 변수 선언할 때 const로, 그러나 오류 발생하면 let으로
