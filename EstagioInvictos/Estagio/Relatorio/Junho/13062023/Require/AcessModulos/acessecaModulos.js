//Criando uma variaver e utilizando o Require para exporta.
//Para utilizar o conteudo de outros arquivos "require('../Aula1/moduloA')"

const moduloA = require('../Aula1/moduloA')
console.log(moduloA.bemvindo)

//Puxando do modulu criado por min, na pasta "node_modules" - "saudacao" - e no arquivo (index.js)
//Por ele estar dentro de um modulo instalado usando "NPM" posso utilizar somente o require ('saudacao')
//sem o (../../) para segui o caminho ate o "node_modules" - "saudacao" - (index.js)
//Nesses caso, ele ira procurar so o arquivo (index.js), caso não tenha, ira dar erro no codigo
const saudacao = require ('saudacao')
console.log(saudacao.ola)
const pastaC = require('../AcessPastas/PastaA/PastaB/PastaC')
console.log(pastaC.ola2)

//Criando um servidor, utilizando os "Modulo" já instalado no "Node"
const http = require('http')//Requisitando o modulo "http" do modulo do proprio "Node"
http.createServer((req, res) => { // Criando o Servidor "http" e criando o requisito, usando uma "function arrow"
    res.white('Bom dia')//Requisito para escrever na tela do servidor
    res.end()//Finalizando o requisito
}).listen(8000)//Porta do servidor (localhost:8000)
