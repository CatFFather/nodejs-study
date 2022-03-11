console.log('code1');

console.time('timeout 0');
setTimeout(() => {
    console.timeEnd('timeout 0');
    console.log('setTimeout 0');
}, 0);
// --> 정확하게 0초가 보장되지는 않는다.(call stack에 쌓여있는 일들을 먼저 처리해야하기 때문)

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick');
});

// process는 Global (글로벌 객체)에 포함되어 있어서 따로 import(require)를 해주지 않아도 쓸 수 있다.
/////////////////////////////////////////////////////////////////////////////////////////////////
// 예시 1
setTimeout(() => {
    console.log('timeout');
}, 0);
setImmediate(() => {
    console.log('immediate');
});

// 예시 2
const fs = require('fs');
fs.readFile('a.js', (result) => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});

// 예시 3
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
process.nextTick(() => {
    setTimeout(() => console.log('timeout2'), 0);
    setImmediate(() => {
        process.nextTick(() => console.log('next tick2'));
        console.log('immediate2');
    });
    console.log('next tick');
});

// setTimeout(), setImmediate(), process.nextTick() 관한 좋은 글
// https://short-term.tistory.com/8
// https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/
