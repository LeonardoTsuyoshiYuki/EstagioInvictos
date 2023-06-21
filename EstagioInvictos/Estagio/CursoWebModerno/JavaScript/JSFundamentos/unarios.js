let num1 = 1
let num2 = 2

num1++ 
//ou ++num1
console.log(num1)
num1--
//ou --num1
console.log(num1)

/*
    Deu true pq, (num1) foi acrecentado +1 que fica (num1) = 2
    depois que ele inclemento ele faz a comparacao, que
    (num1) = 2 === (num2) = 2
    Em seguida e declementado o (num2) = 1
*/
console.log (++num1 === num2--)

/*
    Ja aqui por ter inclementado (num1) = 2 e (num2) = 1
    ele deu false
*/ 
console.log (num1 === num2)


