/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function valor(valor1 = 10, valor2 = 5){
    console.log(`Valor 1 = ${valor1} e valor 2 = ${valor2}`)
    console.log(`Soma dos valores é = ${valor1 + valor2} `)
    console.log(`Subtração dos valores é = ${valor1 - valor2} `)
    console.log(`Multiplicação dos valores é = ${valor1 * valor2} `)
    console.log(`Divisão dos valores é = ${valor1 / valor2} `)
}
valor()