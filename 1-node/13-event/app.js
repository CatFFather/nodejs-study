// custom한 event 만들기
const EventEmitter = require("events"); // events 안에 있는 class
const emitter = new EventEmitter();

// 등록된 callback 함수를 중지 하기 위해 변수화
const callback1 = (args) => {
  console.log("first callback -", args);
};
// on을 이용하여 ellie 라는 특정한 이벤트 발생하면 callback 함수 호출
// emitter에 원하는 갯수 만큼 callback 함수를 등록 할 수 있다.(여기서는 2개 등록)
emitter.on("ellie", callback1);
emitter.on("ellie", (args) => {
  console.log("second callback -", args);
});
// emitter.on("ellie", callback1).on("ellie", (args) => {
//   console.log("second callback -", args);
// });

// emit()을 이용하여 ellie 라는 이벤트 발생!
// 우리가 전달 하고자 하는 데이터를 연결해줌
emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeListener("ellie", callback1); // 특정한 콜백함수 제거
emitter.removeAllListeners(); // 모든 callback을 제거(파라미터로 특정한 이벤트 지정 가능)
emitter.emit("ellie", { message: 3 });
