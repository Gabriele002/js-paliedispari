/*
let parola= prompt("Inserisci una parola");
let parolaRev = reverseString(parola);

if (parola == parolaRev) {
    console.log ("La parola inserita è palindroma")
    
} else {
    console.log ("La parola non è palindroma")
}
*/

//chiedere all untente di scegliere pari o dispari
let pariDispari= prompt("Inserisci pari o dispari");
let numeroUtente= prompt("Inserisci un numero da 1 a 5");

numeroUtente = parseInt(numeroUtente);
//generazione di due numeri casuali tra 1 e 5
let numero1 = getRandomIntegerFromInterval(1, 5);
//somma dei due numeri
let sommaNumeroUtenteNumeroRandom = sommaDueNumeri (numero1, numeroUtente);

if (sommaNumeroUtenteNumeroRandom % 2 == 0 && pariDispari == "pari" ) {
    console.log("Hai vinto");
} else if (sommaNumeroUtenteNumeroRandom % 2 == 1 && pariDispari == "dipari"){
    console.log(" Hai vinto");
} else {
    console.log("Non hai vinto");
}




//-------------------FUNZIONI-------------------//
/*
function reverseString(str) {
    let newString = "";
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
*/
function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+1);
}
function sommaDueNumeri(num1, num2) {
    let risultato = num1 + num2;
    return risultato;
}






