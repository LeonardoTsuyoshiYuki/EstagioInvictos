// Notação com "."

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//Pode ser escrito dessa forma tbm, porem com ponto fica mais
//enxuto
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)


function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}
 
const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
