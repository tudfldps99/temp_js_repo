
// OR 연산
console.log('hello' || 'world');        // || : 좌항이 true면 좌항으로 (우항은 무시)
console.log(0 || '안녕');               // || : 좌항이 false면 우항으로 (좌항은 무시)

// AND 연산자
console.log('HELLO' && 'WORLD');        // && : 좌항이 true면 우항도 봐야하므로 좌항은 무시하고 우항으로
console.log(null && '메롱');            // && : 좌항이 false면 우항은 볼 필요 없으므로 좌항으로

console.log('====================');

var x = -10;

/*
if (x > 0) {
    console.log('안녕하십니까!');
}
*/
x > 0 && console.log('안녕하십니까아아아!');        // 단독 if문

/*
if (x > 0) {
    console.log('안녕하십니까!');
} else {
    console.log('안녕 못함');
}
*/
x > 0 ? console.log('안녕하십니까!') : console.log('안녕 못함')     // 삼항연산자




