// coleção dinâmica de pares chaves/valores

const produto = new Object 
//exemplos de como podemos criar os valores do Objeto
produto.nome = `cadeira` //objeto.caracteristicas = a caracaracteristica
produto[`marca do produto`] = `Generico`// dentro de um '[]' objeto [`descrever o objeto`] = `descrição`
produto.preco = 220// pode ser passado uma string, number, booleano, 

console.log(produto)//{ nome: 'cadeira', 'marca do produto': 'Generico', preco: 220 }

//pode ser deletado as valores do objetos tbm
delete produto.preco
delete produto [`marca do produto`]
console.log (produto)//{ nome: 'cadeira' }

//É pode ter outro objetos dentro do objeto
const carro = {//Objeto
    modelo: `A4`, //Atributo
    valor: 89000,//Atributo
    proprietario:{// Objeto proprietario dentro do objeto carro
        nome:`Raul`,//Atributo
        idade: 56,//Atributo
        endereco:{//Objeto endereco dentro do objeto propriedade que esta dentro do objeto carro kkk
            logradouro: `Rua abc`,//Atributo
            numero: 123//Atributo
        }
    },
    //pode ter "array" dentro de um objeto
    condutores:[/*Inicio Array*/{//Inicio Objetos 1
        nome:`Junior`,//Atributo
        idade: 19//Atributo
    },/*Final Objeto 1*/ {//Inicio Objeto 2
        nome:`Ana`,//Atributo
        idade: 49//Atributo
    }/*Final Objeto 2*/
]/*Final Array*/,

    calcularValoresSeguro: function(){
        //....
    }
}

carro.proprietario.endereco.numero = 1000
carro[`proprietario`][`endereco`][`logradouro`]
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValoresSeguro
console.log(carro)
console.log(carro.condutores)// 
console.log(carro.condutores.length)// dara erro, ate eu comenta o (delete carro.condutores) 