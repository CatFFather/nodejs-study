let num = 1;

// clearInterval을 사용하기 위해 변수화
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval);
}, 6000);
