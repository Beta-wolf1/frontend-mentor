const inputs = Array.from(document.querySelectorAll("input"));
const buttonEl = document.querySelector("button"); 
const cardNumber = document.querySelector(".card-footer h4"); 
const cardName = document.querySelector("#card-name"); 
const cardExp = document.querySelector(".last-p"); 
const cvc = document.querySelector(".bottom p"); 
const cvcError = Array.from(document.querySelectorAll(".cvc-error")); 
const inputError = Array.from(document.querySelectorAll(".error"));
let regex = /^\d{16}$/g;
let regex2 = /^[a-z\s]+$/gi; 
let regex3 = /^\d{3}$/;
let regex4 = /^\d{2}$/;

inputs.forEach((e) => {
    e.addEventListener("keyup", () => {
        if(e.id === "number") {
            if(regex.test(e.value)) {
                inputError[1].style.display = "none";
                e.style.border = "1px solid  hsl(270, 3%, 87%)"
                e.style.opacity = "1"
                e.style.color = "#21092f"
            } else {
                e.style.border = "1px solid red"
                inputError[1].style.display = "inline";
            };
        } else if(e.id === "name") {
            if(regex2.test(e.value)) {
                inputError[0].style.display = "none";
                e.style.border = "1px solid  hsl(270, 3%, 87%)"
                e.style.opacity = "1"
                e.style.color = "#21092f"
            } else {
                // console.log("hi")
                e.style.border = "1px solid red";
                inputError[0].style.display = "inline";
            };
        } else if(e.id === "cvc") {
            if(regex3.test(e.value)) {
                cvcError[1].style.display = "none";
                e.style.border = "1px solid  hsl(270, 3%, 87%)"
                e.style.opacity = "1"
                e.style.color = "#21092f"
            } else {
                e.style.border = "2px solid red";
                cvcError[1].style.display = "inline";
            };
        } else if(e.id === "month" || "year") {
            if(regex4.test(e.value)) {
                cvcError[0].style.display = "none";
                e.style.border = "1px solid  hsl(270, 3%, 87%)"
                e.style.opacity = "1"
                e.style.color = "#21092f"
            } else {
                e.style.border = "1px solid red";
                cvcError[0].style.display = "inline";
            };
        }
    }) 
})

buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    cardNumber.textContent = spaceNum(inputs[1].value);
    cardName.textContent = inputs[0].value;
    cardExp.textContent = `${inputs[2].value}/${inputs[3].value}`;
    cvc.textContent = inputs[4].value;
})

function spaceNum(n) {
    let num = "", x = String(n), y = String(n);
    while(num.length < y.length) {
        num += x.slice(0,4) + " ";
        x = x.slice(4,)
    } 
    return num;
}