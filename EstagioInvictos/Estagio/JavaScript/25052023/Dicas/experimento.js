let a = 3

global.b = 123

this.c = 456
this.b = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel: sem let ou var.
abc = 3 // nao utilizar dessa forma 
console.log(global.abc)

