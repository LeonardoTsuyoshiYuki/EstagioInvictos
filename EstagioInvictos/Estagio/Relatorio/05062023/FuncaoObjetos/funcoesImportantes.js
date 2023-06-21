const pessoa = {
    nome: `Rebeca`,
    idade: 2,
    pesso: 13
} 

//Tres formas de ler os valores dos objetos
//.keys chama so as chaves do Objeto: (nome), (idade), (peso)
console.log(Object.keys(pessoa))

//.values chama so os valores do Objetos: (Rebeca), (2), (13)
console.log(Object.values(pessoa))

//.entries chava as chaves e os valores do Objetos dentro de um "ARRAY": [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'pesso', 13 ] ] 
console.log(Object.entries(pessoa))


//dessa forma chamo as chaves e os valores, porem usado Object.entries(OBJETO(pessoa)).forEach(([tipo(chave), tipo(valor)]) => {}
//([chave, valor]) = uma forma de usar o destuction, aqui esta usando para descontruir as "[]" do "ARRAY"
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)    
})

//Como criar um key nova para o Objeto
//A key criada sempre tem que estar dentro das (``), senao ela intrerpretar como se fosse um valor existetente
//Definir uma propriedade
Object.defineProperty(pessoa, `dataNascimento`, {
    //se ira mostrar a nome da chave(dataNascimento)
    enumerable: true,
    //Se o valor atribuido pode ser alterado(01/01/2019)
    writable: false,
    //Valor do atributo criado (dataNascimento)
    value: `01/01/2019`
})

pessoa.dataNascimento = `01/01/2017`
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECMAScript 2015)
//Forma de concatenar varios Objetos em um so.
//Lembrete: os valores vai sobre escrevendo cado tenha sido repetido
//EX:linha 46 e 48, e mostrado que tem dois atributos (a), mas ira mostrar o valor do ultimo escrito.
//Posso criar varios objetos separados e juntar elas, usando( const ... = Object.assign("Os OBJETOS")): (const obj = Object.assign(dest, objeto1, objeto2))

const dest = {a: 1}
const objeto1 = {b: 2}
const objeto2 = {c: 3, a: 4}
const obj = Object.assign(dest, objeto1, objeto2)

//Não possa ter mais alterações
Object.freeze(obj)
//Tentando alterar o valor de  "c"
obj.c = 1234

//Executando o valor
console.log(obj)