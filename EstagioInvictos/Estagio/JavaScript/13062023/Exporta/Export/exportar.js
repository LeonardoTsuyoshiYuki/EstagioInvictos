//Tanto o this como exports, são extretamente iguais a module.exports
console.log(module.exports === this)
console.log(module.exports === exports)


//Criando os modulos, usando this, exports e module.exports, para ser exportado para fora.
//Pois o this e o exports, são duas referencia do module.exports
this.a = 1
exports.b = 2
module.exports.c = 3

//Não poderá alterá o valor de "exports" e nem do "this", pois o valor só sera importado para o module.exports
exports = null
console.log(module.exports)
//Não será exportado tambem
exports = {
    nome:'Teste'
}
console.log(module.exports)

//caso 
// Porem caso use o module.exports e criar um atributo, agora sim será exportado.
module.exports = {publico: true}