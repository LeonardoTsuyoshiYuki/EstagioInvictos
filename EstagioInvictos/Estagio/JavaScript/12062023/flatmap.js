const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota:8.1
    },{
        nome:'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma 2',
    alunos:[{
        nome:'Rebeca',
        nota: 8.9
    },{
        nome:'Roberto',
        nota:7.3
    }]
}]
//"getNotaAluno" é igual "a" que tem a function arrow "a" recebe (nota) = "notas de alunos"
const getNotaAluno = a => a.nota
//"getNotasDaTurma" é igual a "turma" que tem a function arrow "turma" recebe (alunos) e mapea as notas do "getNotasAlunos"
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)
//"notas1"e iguala escola, que mapea a constante "getNotasDaTurma"
const notas1 = escola.map(getNotasDaTurma)
//imprime as notas(porem não agrupa as notas e sim, mostra dois array)
console.log (notas1)

//Criando o metodo flatMap(pois não existe na API) mas é um metodo utilizado 
Array.prototype.flatMap = function(callBack){
    //Retornando um Array que concatena a aplicação(Array.prototype.concat.apply), de um Array vazio ([])
    //E chama de volta o resultado do mapeio (this.map(callBack))
    return Array.prototype.concat.apply([], this.map(callBack))
}

const notas2 = escola.flatMap(getNotasDaTurma)//Rescrevendo de forma mapeada e concatenado
console.log(notas2)// Impriminto o resultado