const prompt=require("prompt-sync")();

function checkPalindrome(string) {

    const Kirjaimet = string.split('');

    const toisinKirjaimet = Kirjaimet.reverse();

    const toisinSana = toisinKirjaimet.join('');

    if(string == toisinSana) {
        console.log("On palindromi");
    }
    else {
        console.log("Ei ole palindromi");
    }
}

const string = prompt("Anna sana: ");

checkPalindrome(string);toisin