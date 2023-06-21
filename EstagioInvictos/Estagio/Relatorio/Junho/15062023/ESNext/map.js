//Uma das forma para utilizar o "Map"
const tecnologias = new Map()
tecnologias.set('react', {framework: false})// setando em tecnologias (que o 'react' não é um framework)
tecnologias.set('angular', {framework: true})// setando em tecnologias (que o 'Angular' é um framework)

console.log(tecnologias.react)// forma errado de imprimir o resultado, dessa forma(resposta: undefined)
console.log(tecnologias.get('react'))// forma correta (resposta: { framework: false })
console.log(tecnologias.get('angular'))// forma correta (resposta: { framework: true })

//outra forma de se utilizar "Map"(usando esse metodo, pode ser utilizar uma função, como valor)
//Criando um Object não poderia

const chavesVariadas = new Map([//Criando um Object
    [function() { }, 'Função'],//Uma Função como valor
    [{}, 'Object'],//Um Object como valor
    [123, 'Número'],// Números como valor
])

chavesVariadas.forEach((vl, ch) => {//Passando uma callback pelas chaves e valores
    console.log(ch, vl)// imprimindo os 
})

//(.has) saber se a um valor no "Map"
console.log(chavesVariadas.has(123))// verificando se existe o valor (123)(resposta: true)
chavesVariadas.delete(123)//deletando o valor (123)
console.log(chavesVariadas.has(123)) // verificando se existe o valor (123) depois que foi deletado
//(resposta: false)

//(.size) Saber a quantidade de valores dentro do "Map"
console.log(chavesVariadas.size)

//Não pode ter chaves iguais, porem pode ter valores iguais 
// Caso tente criar duas Chaves iguais com valores diferente, o ultimo que foi criando, irá sobre sair no valor anterior

chavesVariadas.set (123, 'a')
chavesVariadas.set (123, 'b')//Valor da chave (123) de 'a' para 'b'
console.log(chavesVariadas)
chavesVariadas.set(456, 'b')//Chave diferente (456) com o mesmo valor = 'b' de chave (123)
console.log(chavesVariadas)