let dodaj = document.getElementById("dodaj");
let usun = document.getElementById("usun");
let paragraf = document.querySelector('p');

dodaj.onclick = function() {
    paragraf.textContent = "To ja - przykładowy tekst :D";
}

usun.onclick = function() {
    paragraf.textContent = "";
}