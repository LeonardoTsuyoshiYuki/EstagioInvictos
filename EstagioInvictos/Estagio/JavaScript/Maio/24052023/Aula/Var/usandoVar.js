//Mesmo com varias chaves o console.log puxa a variavel
//VARIAVEL QUE INICIA COM VAR (GLOBAL E DE FUNCAO)

{
    {
        {
            {
                var sera = `Sera????`
                console.log (sera)
            }
        }
    }
}

console.log (sera)

//Variavel que esta dentro de uma funcao, nao pode ser utilizado

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) // Ira dar erro