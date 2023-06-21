class Pessoa{
    constructor(nome){
        this.name = nome
    }
    falar(){
        console.log(`Meu nome e ${this.name}`)
    }
}
const p1 = new Pessoa (`Leonardo`)
p1.falar()

//Function construction

//Diferenca de um "class" para uma "function construction", que iniciara a class com uma function
function criarPessoa (nome){
    //nao precisara criar um "function contruction" =  'constructor(nome){}' 
    this.nome = nome

    //outra diferenca e iniciar o "falar" com "this.falar"
    this.falar = function() {
        console.log (`Meu nome e ${this.nome}`)
    }
}

const p2 = new criarPessoa (`Carlos`)
p2.falar()