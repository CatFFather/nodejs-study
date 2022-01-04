const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 기본값 : 64kbytes
  encoding: "utf-8",
});
// highWaterMark 는 읽고 쓸 때 얼마나 큰사이즈 별로 읽고 와서 저장 했다가 처리할 것인지 stream이 한번에 처리할 수 있는 내용을 결정한다.
// stream 은 조금조금씩 읽어오기 때문에 이벤트 베이스이다.

console.log(readStream);

const data = [];
// 데이터가 조금씩 오면서 callback 함수가 호출이 됨
readStream.on("data", (chunk) => {
  //   console.log(chunk);
  //   console.count("data");
  data.push(chunk);
});
readStream.on("end", () => {
  console.log(data.join(""));
});

readStream.on("error", (error) => {
  console.log(error);
});

// 체이닝 해서 사용 가능
const data2 = [];
fs.createReadStream("./file.txt", {
  highWaterMark: 8,
  encoding: "utf-8",
})
  .on("data", (chunk) => {
    data2.push(chunk);
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.log(error);
  });

// on은 data가 발생 할 때 마다 callback 함수가 실행 되고 once는 딱 한번만 처리해줌
