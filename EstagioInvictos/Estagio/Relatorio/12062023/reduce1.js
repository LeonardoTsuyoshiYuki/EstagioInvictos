const alunos =  [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log (alunos.map(a => a.nota))//Mostra oque essa (alunos.map(a => a.nota)) estra fazendo na costante

//(.reduce) Irá acumular o valor do Array
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},0/*Caso queirá iniciar com um determinado valor */)

console.log(resultado)