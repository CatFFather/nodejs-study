// import 해서 사용
const counter = require('./count.js');
counter.increase();
counter.increase();
counter.increase();
console.log(counter.count);
console.log(counter.getCount());
console.log(counter.count);
console.log(counter);
// ※ module이 exports 되는 시점의 변수가 고정이됨
// 정확한 이유는 ?
