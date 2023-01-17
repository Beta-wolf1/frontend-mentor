function spaceNum(n) {
    let num = "", x = String(n).replace(/\s/g, "");
    while (x.length) {
        if(x.length >= 4) num += x.slice(0, 4) + " ";
        else num += x;
        x = x.slice(4,);
    }
    return num;
}

export { spaceNum }
