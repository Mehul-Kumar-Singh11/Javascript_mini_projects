let element = document.getElementById('element')
let incEl = document.getElementById('increment_btn')
let saveEl = document.getElementById('save_btn')
let prevEl = document.getElementById('prev')

let count = 0;
function increment(){
    count += 1;
   element.textContent = count;
}
function save(){
    prevEl.textContent += count + " - "
    element.textContent = 0
    count = 0
}    
