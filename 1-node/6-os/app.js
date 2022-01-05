// node가 동작하고 있는 운영체제에 대한 정보를 가지고 올 수 있는 os module
const os = require('os');

// EOL --> 운영체제 마다 새로 줄바꿈 할때 들어가는 문자열이 다르다.
console.log(os.EOL === '\n'); // mac 줄바꿈 문자열 == \n
console.log(os.EOL === '\r\n'); // window 줄바꿈 문자열 == \r\n

console.log(os.userInfo()); // 현재 유효한 사용자에 대한 정보를 반환합니다
console.log(os.cpus()); // 각 논리적 CPU 코어에 대한 정보를 포함하는 개체 배열을 반환합니다.
console.log(os.networkInterfaces()); // 네트워크 주소가 할당된 네트워크 인터페이스를 포함하는 개체를 반환합니다.
console.log(os.totalmem()); // 사용 가능한 시스템 메모리 양(바이트)을 정수로 반환합니다.
console.log(os.freemem()); // 전체 시스템 메모리 양(바이트)을 정수로 반환합니다.
console.log(os.type()); // [`uname(3)`(https://linux.die.net/man/3/uname)]에서 반환한 운영 체제 이름을 반환합니다.
console.log(os.homedir()); // 현재 사용자의 홈 디렉터리에 대한 문자열 경로를 반환합니다.
console.log(os.hostname()); // 운영 체제의 호스트 이름을 문자열로 반환합니다.
