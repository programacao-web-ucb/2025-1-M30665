function gerarNumeroAleatorio(){
    return Math.random();
}

function raizQuadrada(){
    const num = gerarNumeroAleatorio()
    return Math.sqrt(42 + num);
}

function operacaoBloqueante() {
    for (let i = 0; i < 10000000000; i++) {
        //console.log(raizQuadrada());
        raizQuadrada();
    }
}

console.log("Iniciando operação bloqueante");
operacaoBloqueante();
console.log("Operação bloqueante finalizada!");
