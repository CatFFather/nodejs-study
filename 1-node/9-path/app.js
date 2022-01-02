// path는 말 그대로 경로를 뜻함
// 파일의 경로에 접근하거나 경로에 대해 무엇인가를 처리 할 때 사용
const path = require("path");

// global에 속해있는 값 (현재 폴더의 경로, 파일의 경로)
console.log(__dirname);
console.log(__filename);
// 운영체제 마다 다르다.
// POSIX (Unix : Mac, Linux) : 'Users/temp/myfile.html'
// Windows: 'c:\\temp\\myfile.html'

console.log(path.sep); // 경로 구분자
console.log(path.delimiter); // 환경 변수 구분자

// basename
console.log(path.basename(__filename)); // 파일명 정보만 읽어옴
console.log(path.basename(__filename, ".js")); // 확장자를 지워줌

// dirname
console.log(path.dirname(__filename)); // 디렉토리 이름만 가져옴

// extension
console.log(path.extname(__filename)); // 확장자만 출력

// parse (전체 경로를 하나하나씩 분리)
const parsed = path.parse(__filename);
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);

const str = path.format(parsed); // 반대로 object를 string 형태로 변환
console.log(str);

// isAbsolute (절대경로인지, 상대경로인지 확인)
console.log("isAbsolute?", path.isAbsolute(__dirname)); // true
console.log("isAbsolute?", path.isAbsolute("../")); // false

// normalize(경로에서 애러가 있고 좀 이상하다 싶으면 알아서 고쳐줌)
console.log(path.normalize("./folder//////sub")); // --> folder\sub

// join
// 구분자가 운영체제마다 다르기 때문에 path.sep을 이용하여 생성
console.log(__dirname + path.sep + "image");
// join을 이용하면 자동으로 해줌
console.log(path.join(__dirname, "image"));
