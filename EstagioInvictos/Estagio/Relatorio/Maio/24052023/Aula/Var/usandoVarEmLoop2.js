const funcs =[]

//usando o VAR o valor final que é armazenado no (i), sera
//o ultimo valor do loop
for (var i = 0; i < 10; i++){
    funcs.push (function(){
        console.log(i)
    })
}


//Chama as ordem do (funcs) e ira mostra somente o ultimo
funcs[2]()
funcs[8]()