//Arrow Function
//É uma função anônima, não tem como nomear a variavel
const soma = (a, b) => a + b // caso a função não tenha um corpo
console.log (soma(2, 3))

const soma2 = (a, b) => {
    return a + b // O corpo e as {} dentro dela passo a condição com o return
} 
// e em seguido chamo a função e do os valores.
console.log(soma2(2, 3))

//Arrow Function (this)

// Na função arrow o (this) esta indicando no local onde a função foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})//.bing ira fazer com que o lexico1 aponte para um Object
lexico1()// chamando a variavel lexico1
lexico2()// Porem não ira funcionar, pois o não e permitido
//resposta de lexico1() e lexico2() = true


// Parametro default 
function log (texto = 'Node'){
    console.log(texto)
}
log('Sou mais forte')

//Operador rest
//Agrupa os valores do Array
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n) 
    return total
}

console.log(total(2, 3, 4, 5))