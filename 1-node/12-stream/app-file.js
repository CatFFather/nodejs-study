const fs = require("fs");

//
const beforeMem = process.memoryUsage().rss; // 현재 메모리 상태 저장
console.log(beforeMem);
fs.readFile("./file.txt", (_, data) => {
  fs.writeFile("./file2.txt", data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss; // 파일을 다 읽고 다시 쓰고 난뒤 메모리 상태 저장
  console.log(afterMem);
  const diff = afterMem - beforeMem;
  console.log(diff);
  const consumed = diff / 1024 / 1024; // 메모리 사용량 차이 계산
  console.log(`Consumed Memory : ${consumed}MB`);
});

// 만약 파일이 컴퓨터 메모리 보다 더 큰 사이즈의 파일이라면 안된다. 다 읽어 올 수 없다.
// 모든 데이터를 다 읽어서 쓰는 것은 비효율적이다.
// stream을 이용하면 조금조금씩 버퍼별로 하나 읽고 쓰고 반복하면서 데이터를 순차적으로 처리할 수 있다.
