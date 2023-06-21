//Funcionamento do .map
//(.map)Cria um novo Array para implimir o resultado sem alterar o Array Original
Array.prototype.map2 = function(callBack){
    const newArray = []//Criando um novo Array
    for(let i = 0; i < this.length; i++){//(this.lengt) ira fazer percorree todos os valores dentro do Map2
        newArray.push(callBack(this[i], i, this))// Puxando a function callBack, para o novo Array.
        // calBack, que ira chamar tres indice, this[i] = valor atual, i = indice e o this = Array completo
    }
    return newArray// Retornando para o newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Returnar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)