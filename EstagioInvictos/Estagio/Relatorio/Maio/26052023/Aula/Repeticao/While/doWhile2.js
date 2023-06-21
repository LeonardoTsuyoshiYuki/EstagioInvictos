/*
Diferente da estrutura While, o Do/While 
não é necessário atribuir um valor 
inicial para a variável opcao, ou seja, 
fazendo assim:
*/

function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/*somente iniciada a variável, 
sem valor inicial!
Fazendo isso, garante que a estrutura vá 
rodar pelo menos uma vez
*/
let opcao

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opacao escolhida foi ${opcao}.`) 
}while (opcao != -1)

console.log(`Ate a proxima!`)