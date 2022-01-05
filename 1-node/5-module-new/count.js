// exports를 이용하여 내보내기
export let count = 0;

export function increase() {
    console.log('increase');
    count++;
}
export function getCount() {
    return count;
}
