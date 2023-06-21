let isAtico = false
console.log (isAtico)

isAtico = true
console.log (isAtico)

isAtico = 1 
// (!) se e false / (!!) se e True
//Exemplo que pode ser True com o (!!)
console.log('Os verdadeiros...')
console.log (!!isAtico)
console.log (!!3)
console.log (!!-1)
console.log (!!' ')
console.log (!![])
console.log (!!{})
console.log (!!Infinity)
console.log (!!(isAtico = true))

//Exemplo que pode ser False com o (!!)
console.log('Os falso...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log (!!(isAtico = false))


console.log('Para finalizar...')
console.log (!!('' || null || 0 || ` `))


let nome = ``
let nome1 = `Lucas`

console.log(nome || `Desconhecido`)
console.log(nome1 || `Desconhecido`)
