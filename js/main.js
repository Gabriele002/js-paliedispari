let parola= prompt("Inserisci una parola");
let parolaRev = reverseString(parola);

if (parola == parolaRev) {
    console.log ("La parola inserita è palindroma")
    
} else {
    console.log ("La parola non è palindroma")
}



//-------------------FUNZIONI-------------------//
function reverseString(str) {
    let newString = "";
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}




