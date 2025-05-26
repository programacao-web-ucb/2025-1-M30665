import express from 'express';

const app = express()
const port = 3000

app.use(express.json())

let alunos = [
    {"matricula": 1, "nome": "João"},
    {"matricula": 2, "nome": "Maria"}
]

// Lista recursos
app.get('/alunos', (req, res) => {
  res.send(alunos)
})

// Criar recursos
app.post('/alunos', (req, res) => {
  // P/ simplificar, sem validação do novo aluno
  console.log("Novo aluno:", req.body)
  alunos.push(req.body);
  res.send(alunos)
})

// Atualizar um recurso
app.put('/alunos/:matricula', (req, res) => {
  let alunoAtualizado = req.body;

  let indiceAluno = alunos.findIndex(
    (aluno) => aluno.matricula == req.params.matricula);
  
  if(indiceAluno != -1){
    alunos[indiceAluno] = alunoAtualizado;
    
  } else {
    alunos.push(alunoAtualizado);
  }

  res.send(alunos)
})

// Deletar um recurso
app.delete('/alunos/:matricula', (req, res) => {
    alunos = alunos.filter(
      (al) => al.matricula != req.params.matricula);
    res.send(alunos)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})