//Heranca como encontrar o tipo do prototipo de cada Objeto

const ferrari = {
    modelo: `F40`,
    velocidade: 340
}

const volvo = {
    modelo: `V40`,
    velocidade: 200
}

//Mostra o Tipo de prototido da ferrari = {}, pq não tem 
console.log(ferrari.__proto__)
//Para saber se (ferrari.__proto__) e um (Object.prototype) mesmo
console.log(ferrari.__proto__ === Object.prototype)
//Para saber se (volvo.__proto__) e um (Object.prototype) mesmo
console.log(volvo.__proto__ === Object.prototype)
//Que tudo acima de (Object.prototype) e (NULL)
console.log(Object.prototype.__proto__ === null)

//Dessa forma, é criado um Object
function MeuObject(){}
console.log (typeof Object, typeof MeuObject)
console.log (Object.prototype, MeuObject.prototype)