function trueOrFalse(n1,n2) {
    if (n1 === 20 || n1+n2 <= 20 || n2 === 20) {
        return true;
    }
    else {
        return false;
    }
}
console.log(trueOrFalse(40,7));
console.log(trueOrFalse(20,7));
console.log(trueOrFalse(2,7));
