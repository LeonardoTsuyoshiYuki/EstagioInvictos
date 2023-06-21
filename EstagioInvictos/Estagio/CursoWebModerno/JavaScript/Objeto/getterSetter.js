const sequencia = {
    _valor: 1, // (_) Convencional de mostra que o atributo depois do andelarne e privado 
    get valor(){return this._valor++}
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

consolo.log(sequencia.valor,  sequencia.valor)
sequencia.valor = 1000
consolo.log(sequencia.valor,  sequencia.valor)
sequencia.valor = 900 //vai ser ignorado devido ao set, pq o valor e menor que o valor do (_valor)
consolo.log(sequencia.valor,  sequencia.valor)


