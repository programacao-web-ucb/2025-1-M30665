const fs = require('node:fs');

console.log("Lendo arquivo...")
let dados = fs.readFileSync('file.txt');
console.log("Fazendo outra tarefa...");
//console.log(dados.toString());
console.log("Arquivo Lido!");

