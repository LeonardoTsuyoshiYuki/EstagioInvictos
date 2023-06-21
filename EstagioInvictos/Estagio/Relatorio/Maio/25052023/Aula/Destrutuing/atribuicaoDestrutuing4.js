function rand ([min = 0, max = 1000]){
    //dessa forma eu não preciso indentificar se usara 
    //o 'min' ou 'max'
    if (min > max) [min,max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// 'min' = 50 e 'max' = 40
console.log(rand([50, 40]))
//'min' = 992 e 'max' = valor pre determinando na function rand
console.log(rand([992]))
//'min' = valor pre determinando na function rand e 'max' = 10
console.log(rand([, 10]))
//Usar o valor pre determinado do 'min' e 'max'
console.log(rand([]))