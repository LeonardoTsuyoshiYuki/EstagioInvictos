let contador = 1 
while(contador <= 10){
    console.log(`Contador = ${contador}.`)
    contador++
}
/*
(let contador = 1) = (let i = 1)
(while(contador <= 10) = (i <= 10)
(contador++)(i++)
*/
for(let i = 1; i <= 10; i++){
    console.log(`Contador ${i}.`)
}

//.length percorrer os valores 
//dentro do ARRAY
const notas = [9.5, 8.5, 6.8, 7.2, 6.5]
for (let i = 0; i < notas.length; i++){
    console.log(`Notas = ${notas[i]}.`)
} 
