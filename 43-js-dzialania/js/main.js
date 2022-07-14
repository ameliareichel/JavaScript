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

calculator(2,2);
calculator(7,8);
calculator(-2,-2);
calculator(90,3);
calculator(3,-2);
calculator(-2,3);