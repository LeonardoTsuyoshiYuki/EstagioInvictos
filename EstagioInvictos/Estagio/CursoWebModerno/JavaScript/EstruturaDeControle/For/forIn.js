/* `In` e mais utilizaso em objetos, 
mas da para percorrer no ARRAY
*/

//`in` percorrendo no ARRY
const notas = [ 6.7, 1.5, 9.6, 8.4, 9.9]
for (let i in notas){
    console.log(i, notas[i])
}


//`In` percorrendo em um objeto
const pessoa = {
    nome: `Leonardo`, 
    sobrenome: `Yuki`,
    idade: 21 + ` anos`,
    peso: `?`
}

for (let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}