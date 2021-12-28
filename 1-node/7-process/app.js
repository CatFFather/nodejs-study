// 현재 동작하고 있는 node process에 대한 정보를 얻어 올 수 있다.
const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// call stack의 모든 함수가 실행되고 나서 task queue에 있는 callback 함수를 실행한다.
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// 현재 수행되고 있는 코드가 다 완료된 다음에 내가 등록한 callback 함수를 task queue에 넣어 달라고 할 때 사용한다.
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// ※ setTimeout 과 nextTick의 차이점은 nextTick은 task queue의 맨 앞으로 보내지게 되고 setTimeout은 task queue의 제일 끝으로 넣어준다.
