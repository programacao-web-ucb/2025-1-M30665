const express = require('express')
const app = express()
const port = 3000

app.get('/olamundo', (req, res) => {
console.log("Acessando rota /olamundo")
console.log("IP de origem:", req.ip )
  res.send('Olá Mundo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})