//Criar um objeto vazio
const prod1 = {}
//Incluir "nome" para o objeto
prod1.nome = `Celeular Ultra Mega`
//Incluir "preco" para o objeto
prod1.preco = 4998.90

prod1[`Desconto Legal`] = 0.40  //Evitar atributos com espaco

console.log(prod1)

// Objeto com chave
const prod2 = {
    nome: `Camisa Polo`,
    preco: 79.90,
}

console.log(prod2)