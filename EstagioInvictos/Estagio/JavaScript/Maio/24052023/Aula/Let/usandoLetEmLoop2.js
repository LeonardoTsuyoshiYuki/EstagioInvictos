const funcs = []
//Usando o LET sera armazenado todos os valores do loop
for (let i = 0; i < 10; i++){
    funcs.push (function(){
        console.log(i)
    })
}


//Ira mostrar o valor que estara na ordem chamdado.
funcs[2]()
funcs[6]()
funcs[8]()