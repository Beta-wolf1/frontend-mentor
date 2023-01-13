function spaceNum(n) {
    let num = "", x = String(n);
    while(num.length < 16) {
        num += x.slice(0,4) + " ";
        x = x.slice(4,)
    } 
    return num;
}

spaceNum(1234234534563456)