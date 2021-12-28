// node가 동작하고 있는 운영체제에 대한 정보를 가지고 올 수 있는 os module
const os = require('os');

// EOL --> 운영체제 마다 새로 줄바꿈 할때 들어가는 문자열이 다르다.
console.log(os.EOL === '\n'); // mac 줄바꿈 문자열 == \n
console.log(os.EOL === '\r\n'); // window 줄바꿈 문자열 == \r\n

console.log(os.userInfo());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.homedir());
console.log(os.hostname());
