/**
 * loggerError.js의 문제를 수정
 */

// ReadableStream, WritableStream 같이 우리가 on을 이용하여 event를 발생하였을 때 처리했던 로직들은
// 모두 EventEmitter를 기반으로 만들어진 것이다. 그래서 같은 방식으로 EventEmitter를 상속하여 class화해서 사용 가능하다.
// ReadableStream 처럼 스스로 EventEmitter가 되면된다.
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(callback) {
    this.emit("log", "started..."); // Logger가 EventEmitter를 상속 받았기 때문에 emit을 사용 가능하다.
    callback();
    this.emit("log", "ended!");
  }
}

module.exports.Logger = Logger;
