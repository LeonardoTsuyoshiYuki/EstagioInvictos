function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}
/* 
Nunca podera ter a varivel igual a 
condicao, pois o a condicao e ira 
verificar ate a repeticao aparecer, oq foi 
pre determinado.
Entao o valor da variavel tem que ser 
diferente da condicao. 
(nesse caso que e `!=` da condicao)

*/
let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opacao escolhida foi ${opcao}.`)
}

console.log('Ate a proxima!')