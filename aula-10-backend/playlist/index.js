import express from 'express'
import connection from './bd.js'

const app = express()
app.use(express.static('wwwroot'))
app.use(express.json())

connection.connect()
let musicas = [];

app.post('/musica/create', async (req, res) => {
    console.log(req.body)
    //const data = JSON.parse(req.body)
    await connection.query("INSERT INTO musica (nome, artista) VALUES (?, ?)", [req.body.nome, req.body.artista]).p
    musicas.push(req.body.nome)    
    res.send('Cadastro feito')
})

app.get('/musica', async (req, res) => {
    const result = await connection.query("SELECT * FROM musica;")
    res.send(JSON.stringify(result[0]))
})

app.listen(3000)