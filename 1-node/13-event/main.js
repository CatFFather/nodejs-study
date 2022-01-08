/**
 * mainError.js의 문제를 수정
 */

const logger = require("./logger");
// EventEmitter를 따로 받을 필요 없음
const emitter = new logger.Logger();

emitter.on("log", (event) => {
  console.log(event);
});
emitter.log(() => {
  console.log("..... doing something!");
});

// ※ EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 event의 한에서 들을 수 있다.
// 여러가지 event 및 객체를 만들면 다른 emitter에서 발생하는 event는 다른 emitter에서 들을 수 없다.
