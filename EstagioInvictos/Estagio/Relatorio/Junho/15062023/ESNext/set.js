//Não aceita repetição/não indexada

const times = new Set() // Criando uma variavel com o metodo (Set)
times.add('Vasco')//pode ser (.add) uma de cada vez
times.add('São Paulo').add('Palmeiras').add('Corinthias')// Ou de forma mais simples, com varios (.add)('Valor')(.add)('Valor')...
times.add('Flamengo')
times.add('Vasco')//Não pode ter repeção das chaves

console.log(times)
console.log(times.size)// Saber o tamanho do (Set)
console.log(times.has('vasco'))// Não existe, porque Tem que ser igual ao que for gerado(resposta: false)
console.log(times.has('Vasco'))//Dessa forma, irá achar(resposta: true)
times.delete('Flamengo')//Deletando o time ('Flamengo')
console.log(times.has('Flamengo'))//(resposta: false), pois foi deletado na linha 13

//(Set) pode ser criado por um Array simples
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']//Igual no primeiro exemplo, não pode repetir os valores
const nomeSet = new Set(nomes)//Criando o metodo (Set) e inclemantando o Array (nomes)
console.log(nomeSet)// Imprimindo o valor do metodo (Set) com os valores do Array