//Criando um modulo de exportação, com uma função
module.exports = function(...nomes){//(...nome) não limita a quantidade de nomes
    //Mapeando o nome e criando uma função arrow para dar uma frase e passa o nome que sera passado
    return nomes.map(nome => `Boa semana ${nome}!`)
}