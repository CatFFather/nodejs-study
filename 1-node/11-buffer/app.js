// Fixed-size chuck of memory (고정된 사이즈의 메모리 덩어리)
// array of integers, byte of data (숫자의 배열이다. 메모리에 들어있는 데이터 자체를 가르키고 있음)

const buf = Buffer.from("Hi");
console.log(buf); // <Buffer 48 69> (유니코드 형태로 출력됨)
console.log(buf.length); // 2
console.log(buf[0]); // 72 (아스키 코드 형태로 출력됨)
console.log(buf[1]); // 105 (아스키 코드 형태로 출력됨)
console.log(buf.toString("utf8")); // Hi (문자열로 변환) toString의 encoding 기본 값은 'utf8'

// create (직접 buffer를 만들기)
const buf2 = Buffer.alloc(2); // size가 2개인 buffer 생성 (메모리에서 사용 가능한 메모리(덩어리)를 찾아서 그 덩어리를 초기화 시켜줌)
const buf3 = Buffer.allocUnsafe(2); // 덩어리를 찾긴 찾는데 초기화 시켜주지 않음 (기존에 다른 데이터가 들어 있으나 사용되지 않는 메모리라면 공간은 확보하지만 초기화 하지 않음)
// 초기화 하지 않기 때문에 buf3이 조금 더 빠름. 하지만 데이터가 들어있을 수 있으므로 초기화를 항상 해주는게 좋음 초기화 하지 않으면 다른 값이 출력 될 수 있음
buf2[0] = 72; // 아스키 코드 할당
buf2[1] = 105;
buf2.copy(buf3); // buf2의 값을 buf3에 복사
console.log(buf2.toString());
console.log(buf3);
// Buffer라는 것은 문자열이 될수도 있고 숫자가 될 수도 있고 데이터를 row형태로, 메모리에 있는 데이터 형태로, byte 단위로 처리 할 수 있게 해준다.

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
