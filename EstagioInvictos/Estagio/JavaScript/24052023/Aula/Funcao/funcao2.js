// Armazenando uma funcao em uma variacao 
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variacao 
// => substitui a (Funcao)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorna implicito

const subtracao = ( a, b) => a - b
console.log (subtracao (2, 3))


// funcao que imprime uma frase
const imprimir2 = a => console.log(a)
imprimir2 (`Legal!!!`)