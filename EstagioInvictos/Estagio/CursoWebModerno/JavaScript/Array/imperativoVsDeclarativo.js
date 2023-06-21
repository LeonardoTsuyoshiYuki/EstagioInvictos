const alunos = [   
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo(codigo maior)
//Uma forma mais explicativo/detalhado
let total1 = 0 
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log (total1 / alunos.length)

//Declarativo(codigo menos)
//Formato mais direto, d forma mais direto
const getNota = aluno => aluno.nota//Declarando que o "getNota" recebe aluno com a function Arrow aluno.nots(nota do aluno)
const soma = (total, atual) => total + atual // Declarando que o soma, ira somar a nota total(as somas, caso tenha somado ja algum valor) + atual = (segunda)

const total2 = alunos.map(getNota).reduce(soma)// total2 vai mapear as notas do "alunos" e acumular os valores de notas, por ordem
console.log(total2 / alunos.length)// resutado do acumolo / por total de alunos.
