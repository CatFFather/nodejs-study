// 함수에서 this 호출
function hello() {
    console.log(this);
    console.log(this === global); // --> true
}
hello();
// --> 함수안에서 this를 호출하면 global을 호출하는것과 같다.

// class 에서 this 호출
class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this); // --> A { num: 1 }
        console.log(this === global); // --> false
    }
}

const a = new A(1);
a.memberFunction();
// --> class 안에있는 this는 class 자체를 가르키고있고 this는 global이 아니다.
// 즉 class에서 this란 class 자기 자신을 가르키고 있고 calss 외부에 있는 함수에서 쓰이는 this는 global을 가르키고 있다.

// 이것은 js와 비슷한데 한 가지 다른점이 있다.
console.log('----- global scope -----');
console.log(this);
// --> {} 아무것도 출력되지 않는다.
console.log(this === module.exports); // --> true
// --> browser에서의 this는 global을 가르켰으나 node.js 에서의 this는 module.exports 를 가르키고 있다.

// this는 어디에서 쓰느냐에 따라 , 문맥에 따라 달라질 수 있다
