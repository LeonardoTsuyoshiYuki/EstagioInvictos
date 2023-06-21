
//Crindo uma classe "Pessoa" que ira ter um 'constructor' para definir um string.
class Pessoa{
    constructor(nome){
        console.log(typeof constructor)
        //'this.name' ira receber o valor, que passara pelo contrutor
        this.name = nome
        console.log(typeof this.name)
    }

    //'falar' inclementa o valor da "const p1" em 'this.name' 
    falar(){
        console.log(`Meu nome e ${this.name}`)
    }
}
// Define o valor de "nome" para 'p1'
const p1 = new Pessoa (`Leonardo`)
//Imprime o valor do metodo "falar" com o valor da "const p1"
p1.falar()
    console.log(typeof falar)



//Function Factory
// Na funcao factory, nao ira precisar do metodo "construction" incurtanto o codigo
//Criando uma objeto 'nome', que em uma variavel "const criarPessoa =", que chama uma function arrow "=>{}"
const criarPessoa = nome =>{
    //Dentro da function arrow, irar ter uma "return um objeto {falar}"
    return {
        //O objeto 'falar', chama outra function arrow para imprementar um 'console.log' para imprimir o valor da 'const p2'
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

// Define o valor de "nome" para 'p2'
const p2 = criarPessoa(`Carlos`)
//Imprime o valor do metodo "falar" com o valor da "const p2"
p2.falar()