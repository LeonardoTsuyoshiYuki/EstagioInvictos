//Criação de Herança
//Criando herança pai
const pai = { nome: 'Pedro', corCabelo: 'preto' }

//Criando erança filha
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)// Herança do Pai

//Criando erança filha2 (Outra forma de criação)
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)// Herança do Pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}