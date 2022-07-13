function calculator(n1,n2) {
    let sum =  n1+n2;
    let sub = n1-n2;
    let multi = n1*n2;
    if (sum>=0) {
        console.log("Wynik dodawania wynosi " + sum);
    }
    else if (sum<0) {
        console.log("Wynik jest nieprawidłowy");
    }

    if (sub>=0) {
        console.log("Wynik odejmowania wynosi " + sub);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }

    if (multi>=0) {
        console.log("Wynik mnożenia wynosi " + multi);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
}

console.log(calculator(2,2));
console.log(calculator(7,8));
console.log(calculator(-2,-2));
console.log(calculator(90,3));
console.log(calculator(3,-2));
console.log(calculator(-2,3));