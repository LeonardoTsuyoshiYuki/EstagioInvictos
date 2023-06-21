// Tagged Tamplates - processa o tamplate dentro de uma função
function tag(partes, ...valores){// Criando uma função tag que ira usar
    console.log(partes)//resposta [ '', ' está ', '.' ]
    console.log(valores)//resposta [ 'Gui', 'Aprovado' ]
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)// Sem a tag o console irá implimir o valor "Gui está Aprovado."
