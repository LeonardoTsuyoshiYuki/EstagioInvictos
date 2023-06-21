// Numero flutuante 1.1, 5.2, 9.5
// Numero Inteiro 1.0, 2.0, 3.0
const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)

//.isInteger Saber se ele e Inteiro
console.log(Number.isInteger (peso1))
console.log(Number.isInteger (peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.815

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media  = total / (peso1 + peso2)
 
console.log(media)

//.toFixed determina a quantidade de numeros decimais
console.log(media.toFixed(2))

// .toString tranforme o a media em binario
console.log(media.toString(2))

//typeof saber qual a tipagem 
console.log(typeof media)

