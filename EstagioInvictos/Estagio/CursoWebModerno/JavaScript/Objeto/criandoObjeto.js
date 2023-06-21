//Crinado objetos
//Primeira forma
//Usando a notação literal.
const obj1 = {}
console.log 

//Segunda forma
//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log (obj2)

//terceira forma
//Função construtoras
function Produto (nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desconto)
    }
}

const p1 = new Produto(`Caneta`, 7.99, 0.15)
const p2 = new Produto(`Notebook`, 2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Quarta forma 
//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario(`joão`, 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario())
console.log(f2.getSalario())

// Quinta forma 
// Object.create

const filha = Object.create(null)
filha.nome = `Ana`
console.log (filha)

//Sexta forma 
//Uma função famosa que retorna Objeto
//JSON para objeto
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`)
console.log(fromJSON.info)