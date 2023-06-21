//Criando um flag para eu executar a uma das condição(node entradaSaida -a)
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) resposta false

//considição da flag
if (anonimo){//Executar no terminal (node entradaSaida) com o (-a) irá executar essa condição.
    process.stdout.write('Fala Anônimo!\n')//"process" - processo, "stdout" - enviando, ".wirte" - escrevendo 
    process.exit()//fechando a execução
}else{//Executar no terminal (node entradaSaida) sem o (-a) irá executar essa condição.

    //Solicitando um nome
    process.stdout.write('Informe o seu nome: ')//"process" - processo, "stdout" - enviando, ".wirte" - escrevendo  
    
    //Armazenando o nome
    process.stdin.on('data', data => {//"process" - processo, "stdin" - armazenando, ".on" - para (data) 
       
        //crinado uma variavel nome, para armazenar o que foi escrito no terminal em (data)
        const nome = data.toString().replace('\n','')//(data.toString()) - passando para string e (.replace('\n','')) - tirando a quebra de linha (\n)

        process.stdout.write(`Fala ${nome}!!\n`)// Imprimindo o nome no Terminal
        process.exit()//Fechando o processo
    })
}