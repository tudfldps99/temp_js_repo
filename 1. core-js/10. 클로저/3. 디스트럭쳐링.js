
// [배열 디스트럭쳐링]
const arr = ['김철수', '박영희', '홍길동'];
// 방법1) 배열을 분해하여 새로운 변수에 넣음 --> 불편함
/*
const kim = arr[0];
const park = arr[1];
const hong = arr[2];
*/

// 방법2) 배열 디스트럭쳐링
 const [kim, park, hong] = arr;

 // 가져오고 싶은 배열만 추출하려면) 빈값으로 두면 됨
// const [kim, , hong] = arr;         // 0번과 2번 인덱스에만 할당

console.log(`kim: ${kim}, park: ${park}, hong: ${hong}`);

/* ====================================================== */


// [객체 디스트럭쳐링]
const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
console.log(`사원의 이름은 ${emp.empName}고, 나이는 ${emp.age}이며, 입사일자는 ${emp.hireDate}입니다.`);     // --> 불편, and 객체 안에 객체가 중첩으로 들어가면? 더 불편함

const {age, empName, hireDate, birthDay} = emp;     // 배열과 달리 순서에 상관 없음
console.log(`사원의 이름은 ${empName}고, 나이는 ${age}이며, 입사일자는 ${hireDate}입니다.`);  