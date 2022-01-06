const fs = require("fs");

// 읽을(read) 때 뿐만 아니라 쓸(write) 때도 stream이 가능하다
const writeStream = fs.createWriteStream("./file3.txt");

// 모든 write이 끝나면 (finish 이벤트 발생하면) finished! 출력
writeStream.on("finish", () => {
  console.log("finished!");
});

writeStream.write("hello!"); // write(내용) 을 이용하여 쓰기 가능
writeStream.write("world!");
writeStream.end(); // end()를 해줘야 finish 이벤트가 실행됨
