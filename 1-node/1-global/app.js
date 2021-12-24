/**
 * 브라우저의 window 함수와 사용방법은 같다.
 * global에 함수를 선언 할 수 있고 호출 할 수 있다.
 * global을 붙혀서 사용가능하고 없어도 사용가능하다.
 */

const fs = require('fs');

console.log('global : ', global);

global.hello = () => {
    console.log('hello');
};

global.hello();
hello();

// global에 있는 함수들 호출해보기
console.log(__dirname);
console.log(__filename);
console.log(exports);
console.log(module);
console.log(require);
