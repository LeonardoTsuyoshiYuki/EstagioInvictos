//No contexto lexico em javascrip entende as ordem que foi criada a function
const valor = `Global`

function minhaFuncao(){
    //Executara o valor em ordem de escrita
    console.log(valor)
}


function exec(){
    //Nao ira ser mostrado o valor `Local`, pois o valor `Global` foi escrito primeiro
    const valor = `Local`
    //Mesmo sendo chamado a function `minhaFuncao`
    minhaFuncao()
}

//Sera executado o valor `Global`
//Porque causa do contexto lexico
exec()