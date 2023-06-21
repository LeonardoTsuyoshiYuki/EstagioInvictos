function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min:40}
//criando uma variavel para determinar o "min = 40" e "max = 50"
console.log(rand(obj))
//determinando o "min = 955" e usando o "max"
console.log (rand({min: 955}))
//passando pelo valor "max" e "min"
console.log(rand({}))
//ira dar erro pq não esta sendo usado o dustrutuing
//console.log(rand()) 
