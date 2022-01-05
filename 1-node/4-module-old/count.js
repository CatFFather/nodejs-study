let count = 0;

function increase() {
    console.log('increase');
    count++;
}
function getCount() {
    return count;
}
// exports를 이용하여 내보내기
module.exports.count = count;
module.exports.increase = increase;
module.exports.getCount = getCount;

console.log(module);
