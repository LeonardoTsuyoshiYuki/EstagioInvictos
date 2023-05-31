let valor  // nao inicializado (undefined)
console.log(valor)

//Sem valor (null)
valor = null
console.log(valor)
// console.log(valor.toString()) // ERRO

const produto = {}

console.log (produto.preco)
console.log (produto)

produto.preco = 3.5
console.log (produto)

produto.preco = undefined // evite atribur undefined

console.log (!!produto.preco)
console.log(produto)

produto.preco = null //sem preco 

console.log(!!produto.preco)
console.log(produto)