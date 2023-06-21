//O (FS) é um Modulo pré instalado no "NODE"
const fs = require('fs')
const { ary } = require('lodash')

const caminho = __dirname + '/arquivo.json'

//Sincrona (NÃO E INDICADO PAR (IO)LEITURA DE ARQUIVO)
//!CUIDADO! CASO SEJA UM ARQUIVO PESADO, ELE IRÁ TRAVAR EM UM EVENTLOOP
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assincrono... dessa forma ele le todo o arquivo e dessa forma e enviado 
//fs.readFile(caminho, 'utf-8', (err(um erro), conteudo(conteudo do arquivo que esta sendo lido))
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{// (err, conteudo) => {Onde será feito os tratamento emcima do conteudo}
    const config = /*conteudo (dessa forma o caminho e uma string)*/ JSON.parse(conteudo)//Tranforma em um Object
    console.log(`${config.db.host}: ${config.db.port}`)
})

//(Curiosidade) Esse formato e de forma "Sincrona" se é de desse formato ele sempre será enviado primeiro
//Ler os arquivo JSON
const config = require('./arquivo.json')
console.log (config.db)

fs.readdir(__dirname, (err, pastas) => {
    console.log('Conteudo da Pasta ...')
    console.log(pastas) 
})