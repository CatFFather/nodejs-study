const logger = require("./loggerError");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("log", (event) => {
  console.log(event);
});
logger.log(() => {
  console.log("..... doing something!");
});
// ※ EventEmitter의 새로운 객체(emitter)를 만들면 객체에서는 'log'라는 것을 듣고는 있지만
// 누가 event를 emit()하는 곳이 없다.
// 듣고있는 event(main.js의 emitter)와 다른 파일(loggerError.js의 emitter)에서 emit하고있는 emitter는 전혀 다른 객체임
// event가 발생하고 해당 이벤트를 듣기 위해서는 동일한 EventEmitter객체를 사용 해야함

// // 개선 코드

// const logger = require("./loggerError");
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// logger.emitter.on("log", (event) => {
//   console.log(event);
// });

// logger.log(() => {
//   console.log("..... doing something!");
// });
