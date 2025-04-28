let filmes = []
document.getElementById("form").addEventListener(
    "submit", 
  function(event) {
    event.preventDefault(); // Evita envio real do formulário

    // Coletar os dados
    const nomeFilme = document.getElementById("nomeFilme").value;
    filmes.push(nomeFilme)
    if(!nomeFilme){
        alert("Nome de filme vazio!");
    } else {
    // Criar o item da lista
    const item = document.createElement("li");
    item.textContent = `${nomeFilme}`;

    // Adicionar à lista no HTML
    document.getElementById("listFilmes").appendChild(item);

    // Limpar o formulário
    document.getElementById("form").reset();
    }

  }
);

function ordenarFilmes(){
    filmes.sort()
    document.getElementById("listFilmes").innerHTML = '';
    for(let filme of filmes){
        console.log(filme)
        item = document.createElement("li");
        item.textContent = `${filme}`;
        document.getElementById("listFilmes").appendChild(item);
    }


}