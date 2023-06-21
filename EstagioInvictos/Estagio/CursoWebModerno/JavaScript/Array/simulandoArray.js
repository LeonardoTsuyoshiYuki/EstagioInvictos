//Criando um Array como object
//Array é um object

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

//(.difeneProperty) Definindo um "quaseArray" como um Object
Object.defineProperty(quaseArray, 'toString',{
    value: function () {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)