//Criando um arquivo e passando um 'Object' para 'Json'
//Requerindo o modulo 'fs' (File Server) do "Node"
const fs = require ('fs') 

//Criando o 'Object'
const produto = {
    nome: 'Celular',
    valor: 1249.99,
    desconto: 0.15
}
console.log(typeof produto)

//(fs.writeFile(__dirname + '/aquivoGerado.json',) Criando o arquivo ('/aquivoGerado.json') dentro da pasta (EscreverArquivo)
//(JSON.stringify(produto)) Passando o Produto de 'Object' para 'Json'
//(err => { console.log(err || 'Arquivo Salvo!')})) Criando um atributo err (Erro) e passando uma condição, caso de erro ou certo(Arquivo Salvo!)
fs.writeFile(__dirname + '/aquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})
