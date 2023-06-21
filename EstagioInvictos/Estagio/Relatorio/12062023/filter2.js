//(.filter tambem cria um novo Array)

Array.prototype.filter2 = function (callBack){
    const newArray = []//Criando um novo Array
    for (let i = 0; i < this.length; i++){//(this.lengt) ira fazer percorree todos os valores dentro do filter2
        if(callBack(this[i], i, this)){//Criando uma condição a para aver um filtro
            // calBack, que ira chamar tres indice, this[i] = valor atual, i = indice e o this = Array completo
            newArray.push(this[i])//puxando a condição para o valor atual
        }
    }
    return newArray // Retorna para o novo Array
}


const produtos = [
    {nome: 'NoteBook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log (produtos.filter2(caro).filter2(fragil))
