/*
const increase = (() => {        // 함수를 return 받음 --> function
    let num = 0; // 상태 변수
    return () => ++num;
})();

const decrease = (() => {       // 함수를 return 받음 --> function
    let num = 0; // 상태 변수
    return () => --num;
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
console.log(increase()); // 2

*/

// 한번에 두개의 함수 모두 return 하는 방법
const c = (function() {     // 함수가 들어있는 객체 return 받음 --> object ===> c.increase() 로 호출해야 함
    let num = 0;

    // 겍체를 return
    return {    
        // 키:값 형태 --> 값에 들어가는 형태는 정해진게 없음
        increase: () => ++num,
        decrease: () => --num
    };
})();

console.log(c.increase());
console.log(c.increase());
console.log(c.increase());
console.log(c.decrease());
console.log(c.decrease());
console.log(c.increase()); // 2



// 콜백을 이용한 클로저
// function abc() {
//     let num = 0;

//     function def(callback) {
//         num = callback(num);
//         return num;
//     }
//     return def;
// };

const counter = (function() {
    let num = 0;

    function def(callback) {
        return callback(num);
    }
    return def;
})();

let n = counter(m => m += 3);

console.log(`n: ${n}`);

//==============================================

const counter_ = (() => {

    let num = 0;

    return (callback) => {
        return num = callback(num);
    };
})();


console.log('==============콜백 클로저================');
console.log(counter(n => n += 2)); // 2
console.log(counter(n => n ** 3)); // 8
console.log(counter(n => n / 2)); // 4

console.log(counter(n => ++n));
console.log(counter(n => ++n));
console.log(counter(n => ++n));
console.log(counter(n => ++n));
console.log(counter(n => --n));
console.log(counter(n => --n));