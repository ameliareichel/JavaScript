let txt1 = "Uwielbiam JavaScript";
let txt2 = "Jestem świetnym programistą!";

function strLength(t1,t2) {
    if (t1.length > t2.length) {
        return t1;
    }
    else {
        return t2;
    }
}

console.log(strLength(txt1,txt2));