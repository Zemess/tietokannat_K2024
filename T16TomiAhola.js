const prompt=require("prompt-sync")();

console.log("Anna kaksi lukua, kerron siten, kumpi on suurempi vai ovatko ne yhtä suuria.\n");
let x = prompt("\nLuku 1: ");
let y = prompt("\nLuku 2: ");

function kaksiLukua(p1,p2)
{
    if(p1 > p2){
        return p1;
    }
    if(p2 > p1){
        return p2;
    }
    return "Yhtä suuret";
}

console.log("\nVastaus on: ");
console.log(kaksiLukua(x,y));