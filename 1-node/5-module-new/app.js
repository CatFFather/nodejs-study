// import 해서 사용 (2가지 방법)
import { count, increase, getCount } from './count.js';
console.log(count);
increase();
increase();
increase();
console.log(count);
console.log(getCount());
console.log(count);

// import * as counter from './count.js';
// console.log(counter);
// counter.increase();
// counter.increase();
// counter.increase();
// console.log(counter.getCount());
// console.log(counter);

// ※ 여기는 동적으로 count 값이 변경됨
