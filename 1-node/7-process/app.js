// 현재 동작하고 있는 node process에 대한 정보를 얻어 올 수 있다.
const process = require('process');

console.log(process.execPath); // 실행 파일의 절대 경로 이름을 반환합니다.
console.log(process.version); // Node.js 버전 문자열을 포함합니다.
console.log(process.pid); // 프로세스의 PID를 반환합니다.
console.log(process.ppid); // 현재 프로세스의 상위 프로세스 PID를 반환합니다.
console.log(process.platform); // Node.js 프로세스가 실행 중인 운영 체제 플랫폼을 식별하는 문자열을 반환합니다.
console.log(process.env); // 사용자 환경을 포함하는 개체를 반환합니다.
console.log(process.uptime()); // 현재 Node.js 프로세스가 실행된 시간(초)을 반환합니다.
console.log(process.cwd()); // Node.js 프로세스의 현재 작업 디렉터리를 반환합니다.
console.log(process.cpuUsage()); // 'user' 및 'system' 속성을 가진 개체에서 현재 프로세스의 사용자 및 시스템 CPU 시간 사용량을 반환합니다. 개체 속성은 마이크로초(백만분의 1초)

// call stack의 모든 함수가 실행되고 나서 task queue에 있는 callback 함수를 실행한다.
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// 현재 수행되고 있는 코드가 다 완료된 다음에 내가 등록한 callback 함수를 task queue에 넣어 달라고 할 때 사용한다.
process.nextTick(() => {
    console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
    console.log(i);
}

// ※ setTimeout 과 nextTick의 차이점은 nextTick은 task queue의 맨 앞으로 보내지게 되고 setTimeout은 task queue의 제일 끝으로 넣어준다.
