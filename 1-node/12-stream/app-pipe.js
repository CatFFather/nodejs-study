const fs = require("fs");
const zlib = require("zlib"); // node.js에서 제공하는 압축 할 수 있는 module

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.txt"); // 복사 하고 싶은 writeStream을 만들어줌

// 예시 1
// // readStream의 데이터를 읽어 오면서 읽어온 데이터를 그대로 연결함
// // 파이프관을 서로 연결해서 물줄기가 흘러가듯 stream과 stream을 연결하여 데이터가 물처럼 흘러가도록 만들어줌
// const piping = readStream.pipe(writeStream);
// piping.on("finish", () => {
//   console.log("done!!");
// });

// 예시 2
// 중간에 pipe를 하나 더 연결해준다. (압축하는 stream을 추가)
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on("finish", () => {
  console.log("done!!");
});

const http = require("http"); // 서버를 만들때 다시 배울 예정
// 예시 3
// const server = http.createServer((req, res) => {
// http서버를 만들고 파일을 전부다 읽은 다음 메모리에 들어온 data를 반응해서 보내주게 된다.
//   fs.readFile("file.txt", (err, data) => {
//     res.end(data);
//   });
// });

// 예시 4
// 예시 3보다는 stream을 이용하여stream 자체를 response에 piping해서 연결해주면 좋다.
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
});
server.listen(3000);
