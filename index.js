let count = 0;
let counter = document.getElementById("countdown");
let increase = document.getElementById("increasebtn");
let decrease = document.getElementById("decresebtn");
let reset = document.getElementById("resetbtn");

increase.onclick = function() {
    count++;
    counter.textContent = count;
}

decrease.onclick = function() {
    count--;
    counter.textContent = count;
}

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}

let magic = document.getElementById("laala");
magic.style.backgroundColor = 'red';
magic.style.padding = '4rem'