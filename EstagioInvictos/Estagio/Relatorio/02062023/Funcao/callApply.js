function getPreco(imposto = 0, moeda =`R$`){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = { 
    nome:`Notebook`,
    preco: 4589,
    desconto: 0.15,
    getPreco//quando for chamar uma "function" nao precisa de ":"
}

//inclementando valores no 'preco' e no 'desconto'
global.preco = 20
global.desconto = 0.1

console.log(getPreco)//Nao sera invocado pq nao foi passado valores no 'preco' e 'desconto'
console.log(produto.getPreco())//Invocando os valores de 'preco' e 'dencondo' da "const" 'produto'

//Usando o "CALL" e "APPLY" para invocar a "function"

const carro = {
    preco:49990,
    desconto: 0.20
}

//As duas forma de chamar o 'getPreco' esta correto
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Aqui foi imclementado novo valor e desconto
console.log(getPreco.call(carro, 0.17, `$`))//No "CALL" e implementado novos valores dentro da funcao
console.log(getPreco.apply(carro, [0.17, `$`]))//No "APPLY" e implementado dentro de um "ARRAY"
