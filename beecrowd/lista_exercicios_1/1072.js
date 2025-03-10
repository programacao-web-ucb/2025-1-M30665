const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
let numLinhasLidas = 0;
let entradas = [];
let dentro = 0;
let fora = 0;

rl.on("line", function(entrada) {
    if(numLinhasLidas == 0){
        N = parseInt(entrada);
    } else {
        entradas.push(parseInt(entrada));
    }

    numLinhasLidas++;

    if(numLinhasLidas == N + 1){
        
        for(let i = 0; i < N;i++){
            if(entradas[i] < 10 || entradas[i] > 20){
                fora++;
            } else {
                dentro++;
            }
        }

        console.log(`${dentro} in`);
        console.log(`${fora} out`);

        rl.close();
    }

});