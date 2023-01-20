
// 스프레드 : 안전한 객체, 배열 복사
const foodList = ['짜장면', '볶음밥', '탕수육'];

// 방법1) 
//const copyFoodList = foodList;     // but 실제 배열을 복사한게 아니라, 배열 주소값을 복사함

// 방법2)
//const copyFoodList = [foodList[0], foodList[1], foodList[2]];       // 실제 배열 복사O  --> but 불편함

// 방법3) for문 이용
/*
const copyFoodList = [];
for (let f of foodList) {
    copyFoodList.push(f);
}
*/

// 방법4) 스프레드 이용 ==> simple
//const copyFoodList = [...foodList];

// --> 데이터를 더 추가하려면?
const copyFoodList = [...foodList, '떡볶이', '파스타'];

foodList[1] = '짬뽕';
copyFoodList[2] = '깐풍기';

console.log('원본: ' + foodList);
console.log('사본: ' + copyFoodList);

/* ====================================================== */

// 객체에서도 마찬가지
const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};
const copyEmp = {
    ...emp,
    isCopy: true,        // 데이터 추가
    age: 50             // 데이터 변경
};
console.log(emp);
console.log(copyEmp);


