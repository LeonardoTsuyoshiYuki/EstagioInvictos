//hoisting e uma comportamento padrão do JAVASCRIPT que move 
//a declaração para o top 


var a = 2
console.log('a =', a)
//var a = 2 
a = 4
console.log('a = ', a)
/*
Oque o java esta entendendo que:
abs: ISSO NO VAR E ACONTECE A MESMA COISA DENTRO DE UMA 
FUNCTION
var a = 2 //a linguagem coloca move a declaração para cima
console.log('a =', a)
a = 2 
console.log('a = ', a)
*/

// ja no LET da erro
let b = 2 // o correto OBS: isso com VAR E LET 
console.log('b = ', b)
//let b = 2
b = 4
console.log('b = ', b)