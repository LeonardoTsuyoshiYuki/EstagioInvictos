function gerarNumerosEntre(min, max){
    if (min > max)[max, min] = [min, max]// [max, min](destruction) = [min, max](array)
  
    return new Promise (resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 11)
    .then(num => num * 10) 
    .then(numx10 => `O numero gerado foi ${numx10}`)
    .then(console.log)