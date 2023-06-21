//import { setImmediate } from 'timers'

const schedule = require('node-schedule')

//'*/5 * 12 * * 2' */segundo - minuto - horas -dia do mes - mes - dia da semana
//1 - Domingo, 2 - Segunda, 3 - Terça ... 7 - Sabado
//Criando o Temporizador com as regra determinado na função
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function(){
    console.log('Executando Tarfa 1!', new Date().getSeconds())
})

//Cancela a tarefa1 quando der (20000) - 20 segundo
setTimeout(function(){
    tarefa1.cancel()//cancela
    console.log('Cancelando Tarefa 1!')
}, 20000)

//setImmediate
//setInterval


//Criando uma regra para o Temporizador
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]//dia da semanda (1 - Segunda) a (5 - Sexta)
regra.hour = 12//horas
regra.second = 30// quantos em quantos segundo 

//Criando o Temporizador usando a regra 
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log ('Executando Tarfa 2!')
})