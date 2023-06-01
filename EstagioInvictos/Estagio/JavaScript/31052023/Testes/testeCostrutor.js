//Erro

const Carro = function(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar(setInterval(() =>{this.acelerar}, 1000))
console.log(`Velocidade Atual da Uno: ${uno.getVelocidadeAtual()}`)
console.log(uno.acelerar())


