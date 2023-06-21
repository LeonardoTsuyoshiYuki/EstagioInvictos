//Metodos do Array
//Mesmo criando um Array como costante, pordemos sim alterar os elementos depois, porem não podemos atribuir mas elemento 
const pilotos = ['Vettel', 'Alone', 'Raikkinen', 'Massa']
//'.pop' Remove o ultimo elemento do Array
pilotos.pop()//Massa quebrou o carro!
console.log(pilotos)
//resultado [ 'Vettel', 'Alone', 'Raikkinen' ]

//'.push' inclementa um elemento no Array
pilotos.push ('Verstappen')
console.log(pilotos)
//resultado [ 'Vettel', 'Alone', 'Raikkinen', 'Verstappen' ]

//'.shift' Remove o primeiro elemento do Array
pilotos.shift() //Vettel quebrou o carro!
console.log(pilotos)
//resultado [ 'Alone', 'Raikkinen', 'Verstappen' ]

//'.unshift' Adiciona no primeiro elemento do Array
pilotos.unshift('Hamilton')
console.log(pilotos)
//resultado [ 'Hamilton', 'Alone', 'Raikkinen', 'Verstappen' ]

//'.splice' pode adicionar e remover elementos
//Adicionar
//pilotos.splice(ordem, 0, 'elemento', 'elemento') 
pilotos.splice(2, 0, 'Bottas', 'Massa') //Massa conserto o carro!
console.log(pilotos)
//resultado [ 'Hamilton', 'Alone', 'Bottas', 'Massa', 'Raikkinen', 'Verstappen' ]

//Remover
//pilotos.splice(ordem, quantidade)
pilotos.splice(3, 1)// Massa quebro o carro denovo! :(
console.log(pilotos)
//resultado [ 'Hamilton', 'Alone', 'Bottas', 'Raikkinen', 'Verstappen' ]

//'.slice' Cria um novo Array
const algunsPilotos1 = pilotos.slice(2) //Esta criando um array com os pilotos da ordem 2 em diante 
console.log(algunsPilotos1)
//resultado [ 'Bottas', 'Raikkinen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) //Esta criando outro Array começando do piloto da ordem 1 ate a 3, pois não coleta o valor do 4 e sim o anterior
console.log(algunsPilotos2)
//resultado [ 'Alone', 'Bottas', 'Raikkinen' ]