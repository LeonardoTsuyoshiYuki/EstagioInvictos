//Pessoa -> 123 > {....}
const pessoa = {nome: `joão`}
pessoa.nome = `Pedro`
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: `Ana`} erro

//Forma para congerar o Objeto, que vc não poderá alterar nem suas variaveis 

 Object.freeze (pessoa)

 pessoa.nome = 'Maria' //não podera ser alterado variaveis nome
 pessoa.endereco = 'Rua abc' // não podera ser inclementedo nova variaveis
 delete pessoa.nome // não podera ser deletado a variavel

 console.log(pessoa.nome)
 console.log(pessoa)

 // pode ser criado a constante ja com o freeze

const pessoaConstante = Object.freeze({nome: `João`})
pessoaConstante.nome = `Maria`    
console.log(pessoaConstante)