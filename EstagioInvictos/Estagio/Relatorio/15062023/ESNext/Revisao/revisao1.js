//let e const

const { DESTRUCTION } = require("dns")

{
    var a = 2
    let b = 3
    console.log(b)// Com o let so pode ser usado dentro do bloco que ele esta
}

console.log(a)// ja no var e um esclopo global, pode ser acessado tanto dentro como fora do bloco 

// Templete String

const produto = 'iPad'
console.log (`${produto} é caro!`)

//DESTRUCTURING

const [l, e, ...tras] = "Cod3r"//Destruturando a string "Cod3r" em:
console.log(l, e, tras)// resposta (C o [ 'd', '3', 'r' ])

const [x, , y] = [1, 2, 3]//Destruturando o array [1, 2, 3] em:
console.log(x, y)// Resposta (1 3)

const { idade:i, nome } = {nome: 'Ana', idade: 9}//Destruturando um Object {nome: 'Ana', idade: 9} em:
console.log(i, nome)// Resposta 9 Ana
