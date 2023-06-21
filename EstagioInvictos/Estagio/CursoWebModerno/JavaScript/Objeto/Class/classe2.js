//Criando herança com classe

//Criamos uma class e ela e a super herança
class Avo{
    constructor(sobrenome = 'Silva'){
        this.sobrenome = sobrenome
    }
}

//Criando uma classe e extendendo do a classe Avo 
class Pai extends Avo{
    constructor (sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
//Criando uma classe e extendendo do a classe Pai 
class Filho extends Pai{
    constructor(){
        super()//posso tirar o 'Silva' da class Avo para colocar aqui no super
    }
}

//Imprimir os dados da herança do pai a profissão e o sobrenome do avo
const filho = new Filho 
console.log(filho)
const pai = new Pai
console.log (pai)

const avo = new Avo
console.log (avo) //A classe (avo) mais alta não recebe os valores de sua herança (pai e filho)