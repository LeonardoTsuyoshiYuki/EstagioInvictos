// Ternario, tera a mesma função que o 'if' e 'else'
const resultado = nota => nota >= 7 ? `Aprovado` : `reprovado`

//poderia ser escrito dessa forma
//const resultado = nota => {
//        return nota >= 7 ? `Aprovado` : `reprovado`
//}


console.log(resultado(7.1))
console.log(resultado(6.8))
 