const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Devido ter feito uma function na instanciaNova, no final tem que ser colocado "()"
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//Inclementando o valor no instanciaUnica
contadorA.inc()
contadorA.inc()

//Por ter um modulo simples, irá alterar o valor das constante contadorA e contadorB
console.log(contadorA.valor, contadorB.valor)
//resposta (3 3)

//Inclementando o valor no instanciaNova
contadorC.inc()
contadorC.inc()

//Por ter um modulo com factory, irá alterar o valor das constante contadorC e a contadorB não irá ter alteração
console.log(contadorC.valor, contadorD.valor)
//resposta (3 1)