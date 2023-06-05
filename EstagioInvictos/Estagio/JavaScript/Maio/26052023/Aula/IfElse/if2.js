function teste (num){
    if (num >= 7)
    console.log(num)

    console.log(`Final`)
}

teste(6)
teste(8)

/* 
cuidado com o `;`, 
nao usar com as estruturas de controle.
*/
function teste2 (num){
    if(num > 7 ); { 
        console.log(num)
    }
}

teste2(6)
teste2(8)