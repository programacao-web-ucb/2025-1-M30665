function atualizarTabela(num){
    let valorAtual = parseInt(document.getElementById(`freq${num}`).innerText)
    document.getElementById(`freq${num}`).innerText = ++valorAtual;

}

function atualizarHistorico(num){
    const item = document.createElement("li");
    item.textContent = num;
    document.getElementById("historicoLancamentos").appendChild(item);
}

function lancarDado(){
    let valor = Math.floor(Math.random() * (6)) + 1;
    atualizarHistorico(valor)
    atualizarTabela(valor)
}