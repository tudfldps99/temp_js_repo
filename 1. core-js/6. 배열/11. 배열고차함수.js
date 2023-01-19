
const arr = [1,2,3,4,5,6,7,8,9,10];

// forEach : 단순 소비
arr.forEach(n => {
    console.log(n);
});

console.log('================');

// filter : 조건 콜백함수에 맞게 필터링 (10개짜리 필터링하면 개수 적어질 수 있음)
const evenArr = arr.filter(n => n % 2 === 0);
console.log(evenArr);

console.log('================');

// map : 조건 콜백함수에 맞게 새롭게 매핑해서 리턴 (10개짜리 매핑하면 개수 변함 없이 10개)
const powArr = arr.map(n => n ** 2);
console.log(powArr);