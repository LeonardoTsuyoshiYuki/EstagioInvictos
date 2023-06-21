//Criando a porta do servidor
const porta = 3000

//Requerindo o framework express dentro do node_modules
const express = require('express')

//Passando o resultado do express para a variavel app
const app = express()

//Requerindo o body-parser
const bodyParse = require('body-parser')

//Requerindo o banco de dados
const bancoDeDados = require('./bancoDeDados')

//Quando eu criar um produto no postman, passará por essa requisição, para ser tranformado para um Object
app.use(bodyParse.urlencoded({extendes: true}))

//get é uma forma de requisição
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())//Convertendo para JSON automaticamente 
})

//Chama um produto especifico (app.get('/produtos/:id',()))
app.get('/produtos/:id',(req, res, nesxt) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//Criando os produtos
app.post ('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//Tranforma JSON
})

//Editando o produto
app.put ('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)//Tranforma JSON
})

//Excluir Produto
app.delete ('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(
        req.params.id
        )
    res.send(produto)//Tranforma JSON
})

app.listen(porta, () =>{//Mostrar quando executar
    console.log(`Servidor está executando na porta ${porta}.`)
})