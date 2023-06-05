const [a, b, c, d] = [3 , 5, 8, 15]

const soma = a + b + c + d
const subtracao = a - b
const multiplicacao = c * d
const divisao = d / b
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

// O (-) na frente da variavel, ira transforma o resultado 
// em negativo
console.log(-divisao)

/* O (-) na frente da variavel, ira transforma o resultado 
 em negativo
OBS: ele segue a regra matematica 
(+ com + = +)
(- com - = +)
(+ com - = -)
(- com + = -)
*/
console.log(-subtracao)