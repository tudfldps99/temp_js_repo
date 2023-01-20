
// 전역변수 처리
/*
// 카운팅 변수
let num = 0;   // 전역 변수

// 카운트 숫자 상태 변경 함수
const increase = () => ++num;

console.log(increase());

// 중간에 null 이 바뀌면?
num = 999;

console.log(increase());        // 2? NO. 1000
*/

// 지역변수 처리 
/*
const increase = () => {
    let num = 0;        // 상태변수를 지역변수 처리     --> 함수 호출이 끝나면 죽어버림
    return ++num;
}
console.log(increase());        // alt + shift + 방향키 아래 : 한줄복사
console.log(increase());
console.log(increase());        // 3? NO. 1
*/

// 클로저
const increaseClosure = () => {
    
    let num = 0;        // 상태변수 (지역변수) 

    // ++num을 return 해주는 함수를 return
    function increase() {
        return ++num;
    }
    return increase;        // increase() 와 increase 개념이 다름
                            // increase() : 함수를 불러서 ++num 을 받아온 후에 ++num 을 return 하겠다는 의미. 결국 return ++num 과 똑같음
                            // increase : 함수를 통째로 return 하겠다는 의미
}

const result = increaseClosure();       // -> increaseClosure가 increase 라는 함수를 return 했기때문에 result가 함수가 됨
console.log(result());
console.log(result());
num = 999;      // 중간에 num을 조작하려 한다해도, num이 지역변수이기때문에 변함 없음
console.log(result());      // 3? Yes


// 즉시 실행 함수 : 한번 호출하고 말 함수
//function add(){};
//add();
// ->
//function add(){}()
// ==> (function (){}())

const result2 = (() => {
    let num = 0;
    return () => ++num;
})();
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());