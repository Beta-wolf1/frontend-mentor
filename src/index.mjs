const [inputs, buttonEl, cardNumber, cardName, cardExp, cvc, cvcError, inputError] = [
    Array.from(document.querySelectorAll("input")), 
    document.querySelector("button"), 
    document.querySelector(".card-footer h4"), 
    document.querySelector("#card-name"), 
    document.querySelector(".last-p"), 
    document.querySelector(".bottom p"), 
    Array.from(document.querySelectorAll(".cvc-error")), 
    Array.from(document.querySelectorAll(".error"))
]

const [regex, regex2, regex3, regex4] = [
    /^(\d{4}\s){3}\d{4}$/g,
    /^[a-z\s]+$/gi,
    /^\d{3}$/,
    /^\d{2}$/
]


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
    let num = "", x = String(n).replace(/\s/g, ""), y = String(n).replace(/\s/g, "");
    while(num.length < y.length) {
        num += x.slice(0,4) + " ";
        x = x.slice(4,)
    }
    return num;
}