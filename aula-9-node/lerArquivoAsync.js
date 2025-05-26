const fs = require('node:fs');

const processaDados = (err, data) => {
    if (err) {console.log("erro:", err);}
    else{
      console.log("Arquivo Lido!");
      //console.log("Dados:", data.toString());
    };
  }

fs.readFile('file.txt', processaDados);
console.log("Lendo arquivo...");
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")
console.log("Fazendo outra tarefa...")