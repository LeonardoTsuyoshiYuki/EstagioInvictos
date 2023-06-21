/*Tem a mesma funcao do while, 
porem a condicao vem sempre depois
da repeticao. 
*/

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/*
Nao tem problema criar uma variavel
que inicie com o valor da condicao, pois
a repeticao ira compirar, e assim que a 
condicao ocorrer ele e executato.
Entao mesmo que eu coloque a variavel igual
a condicao, sera gerado os numeros aleatorio
e quando gera o (-1) que e a condicao do 
while e executado.
(nesse caso que e `!=` da condicao)

*/
let opcao = -1

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opacao escolhida foi ${opcao}`)    
}while (opcao != -1)

console.log(`Ate a proxima!`)