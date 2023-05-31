
// O ARRAY pode ter tando numero como string
const valores = [7.7, 8.9, 6.3, 9.2]
//mostra o valor da 1 e 3 posicao no ARRAY
console.log(valores[0], valores[3])
// Da undefined porque, nao tem 4 valores, porque comeca a contar do 0
console.log(valores[4])

// Acrecento um valor no 4 eslote do ARRAY
valores[4] = 10
// Mostra os valores que tem no ARRAY
console.log (valores)
//Mostra a quantidade que tem no ARRaY
console.log (valores.length)

//.push Inclui valores no ARRAY
valores.push ({id: 3}, false, null, `teste`)
console.log (valores)

//.pop Deleta e mostra o ultimo valor do ARRAY
console.log(valores.pop())
console.log(valores)

// deleta o primeiro valor ([0])
delete valores[0]
console.log (valores)

// mostra que tipo e um ARRAY(OBJECT)
console.log (typeof valores)