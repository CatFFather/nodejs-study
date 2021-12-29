console.log("code1");

console.time("timeout 0");
setTimeout(() => {
  console.timeEnd("timeout 0");
  console.log("setTimeout 0");
}, 0);
// --> 정확하게 0초가 보장되지는 않는다.(call stack에 쌓여있는 일들을 먼저 처리해야하기 때문)

console.log("code2");
setImmediate(() => {
  console.log("setImmediate");
});

console.log("code3");
process.nextTick(() => {
  console.log("process.nextTick");
});

// process는 Global (글로벌 객체)에 포함되어 있어서 따로 import(require)를 해주지 않아도 쓸 수 있다.
