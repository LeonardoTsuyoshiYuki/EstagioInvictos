//operador ... rest(juntar)/spread(espelhar)
//Usar rest com parâmetro de função


//usar spread com Object
//Criando um object 
const funcionario = {nome: 'Maria', salario: 12345.99}
//Criando um clone do Object funcionario (...funcionario)
const clone = { ativo: true, ...funcionario}
console.log(clone)

// Usar spread com array
//Criando um Array
const grupoA = ['João', 'Pedro', 'Gloria']

//Criando um clone do Array grupoA (...grupoA)
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)