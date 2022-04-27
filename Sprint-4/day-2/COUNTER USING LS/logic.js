var count = localStorage.getItem('counter') || 0;
// localStorage.clear()
var display = document.querySelector('#container>h1');
display.innerText = count;
document.querySelector('#increase').addEventListener('click',increase);
document.querySelector('#decrease').addEventListener('click',decrease);
function increase() {
    count++;
    console.log(count);
    display.innerText = count;
    localStorage.setItem('counter', count);
}
function decrease() {
    count--;
    display.innerText = count;
    localStorage.setItem('counter', count);
}
