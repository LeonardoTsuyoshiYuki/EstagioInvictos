//Criando o Banco de Dados
//Criando o id do produto para ter sua sequencia
const sequence = {
    _id: 1,
    get id(){return this._id++} //Quando setar um produto o proximo irá inclementa mais 1, tendo o "id = 2"
}

//Criando a variavel produtos para ser armazenado o produto
const produtos = {}

//Criando a função salvar produto 
function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id //se o id do produto náo tiver setado, então id produto recebe o id da sequencia
    produtos[produto.id] = produto//Caso a chave do id do produto tiver dentro de produtos, entao recebe o produto
    return produto
}

//função para pegar o produto por id
function getProduto (id){
    return produtos[id] || {}//procura o id do produto em produtos, caso não tenha volta Object vazia
}

//Função para retorna todos os valores do produtos, que foi salvo
function getProdutos(){
    return Object.values(produtos)
}

//Excluir o produdo
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//Fazer com que essas função seja visivel para fora do modulo, porem somente o (salvarProduto, getProduto, getProdutos)
//ja o sequence, ficara somente dentro do modulo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}
