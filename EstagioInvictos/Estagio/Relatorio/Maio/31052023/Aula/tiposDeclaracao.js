//(console.log pode ser criado antes da function)
//Pois toda function declarada e lida antes de executar os comando
console.log(soma(3, 4))

//Function declarada
function soma(x, y){
    return x + y
}

//Function expression
//(console.log sempre sera depois de criar a function)
const sub = function(x, y){
    return x - y
}
console.log(mult(3, 4))

//Named function expression 
//(console.log sempre sera depois de criar a function)
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))