const open = document.querySelector("nav img");
const close = document.querySelector("nav div img");
const div = document.querySelector("nav div");
const cover = document.getElementById("cover");
console.log(cover)
let isOpen = false;

open.addEventListener('click', () => {
    if(!isOpen) {
        div.style.display = "block";
        cover.style.display = "block"
        isOpen = true;  
    }
})

close.addEventListener('click', () => {
    if(isOpen) {
        div.style.display = "none";
        cover.style.display = "none"
        isOpen = false;   
    }
})