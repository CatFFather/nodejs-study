/**
 * console 에도 log만 보는 기능 말고 여러가지 기능이 있다.
 * console을 이용하여 디버깅할때 유용하게 사용 가능하다.
 * log level 별로 정의하게 되면 브라우저에서는 색에 따라 중요도가 보이기 때문에 개발자가 대응하기 편하지만
 * node에서는 색상이 나타나지 않기 때문에 구별하기는 쉽지않다.
 * 그럼에도 level에 따라 다양한 api가 존재하는 이유는 서버에 배포하였을 때 정말 중요한 warning이나 error 같은 경우에는 log 파일을 남기거나 log를 남길 수 있는 서비스를 이용하는 경우가 있는데
 * log의 심각성에 따라 level 별로 잘 console을 활용하면 나중에 배포하였을 때 서버의 심각성을 빠르게 알아차리기 쉽고 에러가 있을 때 그 부분을 수정하기 쉽다.
 *
 *
 * assert
 * assert는 첫번째 인자로 전달한 값이 true가 아닐 때만 log로 출력 할 수 있다.
 *
 * print object
 * console.table()을 활용하면 object를 보기편하게 table형태로 출력 가능하다.
 * console.dir() 을 사용하면 두번째 인자에 옵션을 사용하여 데이터를 어디까지 볼것인지 정할 수 있다.
 *
 * measuring time
 * console.time()을 이용하여 시간을 측정 할 수 있다. 성능 확인, 성능 개선을 할때 유용함
 *
 * counting
 * console.count()을 이용하여 내가 작성한 함수가 내가 예상한 횟수 만큼 호출 되었는지 , 몇 번 호출 되었는지 궁금할 때 사용
 * 중간에 console.countReset() 을 넣게되면 카운트가 초기화 된다.
 *
 * trace
 * 디버깅을 할 때 해당 함수가 어디서 호출되었는지 알고싶을때 사용하면 유용함
 * 어디서 부터 호출되었는지 추적이 가능함
 *
 * */

console.log('logging.......');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!'); // 출력 O
console.assert(2 === 2, 'same!'); // 출력 X

// print object
const student = { name: 'CatFather', age: 30, company: { name: 'AC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, color: false, depth: 0 });

// measuring time (시간 측정)
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}
f1();
