import { useState } from 'react'
import './App.css'

function App() {
  const [artistas, setArtistas] = useState([]);
  const [nomeArtista, setNomeArtista] = useState("");
  const [nomeMusica, setNomeMusica] = useState("");


  function geraListaArtistas(){
    console.log(artistas)
    return artistas.map((artista, ix) => (
      <li key={ix + 1}>
        {artista.nome} {artista.musica}
      </li>
    ))
  }

  function atualizaNomeArtista(event){
    console.log('artista', event.target.value)
    setNomeArtista(event.target.value)
  }

  function atualizaNomeMusica(event){
    console.log('musica', event.target.value)
    setNomeMusica(event.target.value)
  }


  function adicionarNovoArtista(){
    console.log('estado atual:', nomeArtista, nomeMusica)
    setArtistas([...artistas, 
      {"nome": nomeArtista, "musica": nomeMusica}])
    setNomeArtista("")
    setNomeMusica("")
  }

  return (
    <div>
        <label>Nome da música</label>
        <input value={nomeMusica} onChange={atualizaNomeMusica}></input>
        <label>Artista</label>
        <input  value={nomeArtista} onChange={atualizaNomeArtista}></input>
        <button onClick={adicionarNovoArtista}>Salvar</button>
        <ul>
          {geraListaArtistas()}
        </ul>
    </div>
  )
}

export default App
