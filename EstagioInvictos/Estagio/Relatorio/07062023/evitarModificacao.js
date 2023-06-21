// Object.preventExtensions

const protudo = Object.preventExtensions({
    nome:`Qualquer`,
    preco: 1.99, 
    tag: `Promoção`
})
console.log(`Extensível`, Object.isExtensible(protudo))

protudo.nome = `Borracha`
protudo.descricao = `Borracha escolar branca`
delete protudo.tag
console.log(protudo)

//Object.seal

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object,seal(pessoa)
console.log(`Selado:`, Object.isSealed(pessoa))

pessoa.sobrenome = `Silva`
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes