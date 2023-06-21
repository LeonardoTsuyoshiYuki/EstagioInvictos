/* 
    Para percorrer so o ARRAY usar o "forEach"
    O ".map" estar criando um novo ARRAY, usar quando preciso transforma um ARRAY em outro.
    Quando precisar filtrar um ARRAY, usar o ".filter"
*/

const produtos = [
    {nome: 'NoteBook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (p){
    //return false (retorna um Array vazio)será filtrado todos 
    //return true (retorna todo Array) não será fitrado
    //return p.preco > 2500//resposta [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
    //return p.preco > 2000//resposta 
                                     //[ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
                                     //[ { nome: 'NoteBook', preco: 2499, fragil: true } ]
    return p.preco > 1599
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log (produtos.filter(caro).filter(fragil))
