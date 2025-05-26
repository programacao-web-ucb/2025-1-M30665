
function envioPost(){
    const data = document.getElementById("name")
    const artistaData = document.getElementById("artista")
    const novaMusica = new Musicas(data.value,artistaData.value)

    console.log(novaMusica)
    fetch('/musica/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaMusica)
      });

      addToList(novaMusica);
}
console.log("alguma coisa")

async function carrega (){
    console.log("unload")
    
    const musicas = await fetch("/musica");
    const json = await musicas.json()
    for(musica of json){
        addToList(musica)
    }
    
    console.log(json)
}

carrega()


function addToList(novaMusica) {
    const list = document.getElementById("musicas");
    let item = document.createElement("li");
    item.innerText = `Nome: ${novaMusica.nome} Artista: ${novaMusica.artista}`
    list.appendChild(item);
}