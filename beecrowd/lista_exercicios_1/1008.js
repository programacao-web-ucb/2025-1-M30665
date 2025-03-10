const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numLinhasLidas = 0;
let entradas = [];


rl.on("line", function(entrada) {
    entradas.push(parseFloat(entrada));
    numLinhasLidas++;
    if(numLinhasLidas == 3){
        console.log(`NUMBER = ${entradas[0]}`);
        let resultado = entradas[1] * entradas[2];
        console.log(`SALARY = U$ ${resultado.toFixed(2)}`);
        rl.close();
    }
});