/*

//1 sposób:
let button = document.querySelector('button');
let nameP = document.getElementById("name");
let surnameP = document.getElementById("surname");
let phoneP = document.getElementById("phone");
let nameInp = document.getElementById("nameIn");
let surnameInp = document.getElementById("surnameIn");
let phoneInp = document.getElementById("phoneIn");

button.onclick = function() {
    nameP.textContent = nameInp.value;
    surnameP.textContent = surnameInp.value;
    phoneP.textContent = phoneInp.value;
}
*/

//2 sposób:
let button = document.querySelector('button');
let nameP = document.getElementById("name");
let surnameP = document.getElementById("surname");
let phoneP = document.getElementById("phone");

button.onclick = function() {
    nameP.textContent = document.getElementById("nameIn").value;
    surnameP.textContent = document.getElementById("surnameIn").value;
    phoneP.textContent = document.getElementById("phoneIn").value;
}