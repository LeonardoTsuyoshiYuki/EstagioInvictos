//Funcao construtor
function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo Privado
    let velocidadeAtual = 0
    //Metodo Publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}


const uno = new Carro
//Imclementa mais 5 
uno.acelerar()
//Imclementa mais 5 
uno.acelerar()
//Imprime Valor 10
console.log(`Velocidade Atual da Uno: ${uno.getVelocidadeAtual()}`)
const ferrari = new Carro(350, 20)
//Imclementa mais 20 
ferrari.acelerar()
//Imclementa mais 20
ferrari.acelerar()
//Imclementa mais 20
ferrari.acelerar()
//Imprime Valor 60
console.log(`Velocidade Atual da Ferrari: ${ferrari.getVelocidadeAtual()}`)