const express = require('express')
const fs = require('fs');
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const test = require('./testMid')

/**
  A ordem das funções e importante, o Express usa o
  sistema de resposabilidade por cadeia, ou seja uma função se liga outra 
  atraves da função next()
 */

const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(test('Marcelo'))

//requisição com querys
//http://localhost:3000/clientes/realtorio?completo=true&ano=2018
app.get('/clientes/relatorios' , (req,  res) => {
  res.send(`Cliente relatorio: completo: ${req.query.completo} ano = ${req.query.ano}`)
})

//requisição com paramentros
//Exemplo: http://localhost:3000/clientes/3/
app.get('/clientes/:id' , (req,  res) => {
  res.send(`Cliente ${req.params.id} selecionado`)
})

app.use('/', (req, res) => {
  //res.send('Hello World!')
  //res.sendFile('index.html', {root: __dirname })
  res.json(
    {
      "nome" : "Computador",
      "price" : 1.28,
      "qtd": 15
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})