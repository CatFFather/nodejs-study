// require할 때 fs의 promises 형태로 바로 가져옴
const fs = require('fs').promises;

// read a file (파일의 전체 내용을 비동기적으로 읽습니다.)
// readFile('path' , option) option이 없으면 버퍼형태로 데이터가 들어옴
fs.readFile('./text.txt', 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// writing a file (파일에 데이터를 비동기적으로 기록하여 파일이 이미 존재하는 경우 대체한다.)
// writeFile('file',data) 파일을 쓰는 형태이기 때문에 return 되는것은 없음 (Promise<void>)
// then은 사용하지 않지만 catch는 사용해야함. (error가 발생할 수 있기 때문)
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') //
    .catch((error) => {
        console.log(error);
    });
fs.writeFile('./file.txt', 'Yo!, Dream Coders! :) ') //
    .catch((error) => {
        console.log(error);
    });
// --> 동일한 파일명에 다른 데이터를 입력하면 덮어쓰기 됨

// 기존 파일에 내용을 추가 하고싶으면 appendFile을 사용 (파일에 데이터를 비동기식으로 추가하여 파일이 아직 존재하지 않는 경우 파일을 만듭니다.)
fs.appendFile('./file.txt', 'append!, Dream Coders! :) ') //
    .then(() => {
        // 비동기라서 파일쓰기가 완료 된 후에 copy 해줘야함
        fs.copyFile('./file.txt', './file-copy.txt');
    })
    .catch((error) => {
        console.log(error);
    });

/*
  ※ 비동기는 순차적으로 될 수도 있고 안될 수도 있다.
  순서대로 코드를 작성했지만 모든 것이 promises이므로 비동기적으로 처리되기 때문에 순서가 보장되지 않는다.
  순서가 중요한 경우라면 then 안에서 해당하는 promises가 다 수행된 다음 특정한 일을 해야 한다.
*/

// copy (src를 dest에 비동기식으로 복사합니다. 기본적으로 'dest'는 이미 있는 경우 덮어씁니다.)
fs.copyFile('./copyTest.txt', './copyTest-copy.txt') //
    .catch((error) => {
        console.log(error);
    });

// folder
// 폴더 생성 (비동기식 mkdir(2) - 디렉터리를 만듭니다.)
fs.mkdir('sub-folder') //
    .catch((error) => {
        console.log(error);
    });

// 해당하는 경로에 있는 모든 파일들의 이름을 읽어올 수 있음(폴더 이름도 출력됨)
fs.readdir('./') //
    .then((data) => {
        // string 배열 형태로 return 됨 (Promise<string[]>)
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// ※ 중요 포인트
// 항상 api를 사용할 때 인자는 어떤것들이 있는지, 추가적으로 전달해야하는 옵션같은 인자들이 있는지
// 함수에서 return 되는 값이 있는지 promises 라면 catch를 이용하여 error를 잡는게 중요
