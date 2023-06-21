const { resolve } = require("path")

const primeiroElemento = arrayOrString => arrayOrString[0]//pega o pimeiro elemento
const letraMinuscula = letra => letra.toLowerCase()//tranforma letras maiusculos em minuscolos

new Promise (function (resolve) { //criando um Object, com promise
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)//(resposta: Ana)
    .then(primeiroElemento)//(resposta: A)
    .then(letraMinuscula)//(resposta: a)
    .then(console.log)//(resposta: a)