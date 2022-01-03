const fs = require("fs");

// 모든 api는 3 가지 형태로 제공됨
// 비동기 형태 --> rename(params, callback(error,data))
// 동기 형태 --> try { renameSync(...) } catch(e){ }
// promises.rename().then().catch(0)

// renameSync 사용
// (동기적으로 수행되어서 끝날때까지 다음 줄로 넘어가지 않으므로 가급적 사용하지 않는게 좋음)
try {
  // renameSync('oldPath','newPath')
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (e) {
  console.log(e);
}

// rename('oldPath','newPath',callback)
// 비동기적으로 수행되기 때문에 callback 함수 전달
fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
  // error가 없을 때 null이 출력됨(error이 없어도 callback이 실행됨)
});
console.log("hello");

// promises 형태로 사용
fs.promises
  .rename("./text2.txt", "./text2-new.txt")
  .then(() => {
    console.log("Done!!");
  })
  .catch((err) => {
    console.log(err);
  });
