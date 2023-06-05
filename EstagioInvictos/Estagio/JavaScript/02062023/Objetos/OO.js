//CODIGO NAO EXECUTAVELL!!

//Procedural
//Exemplo
//"FUNCTION" que manipula dados
processamento(valor1, valor2, valor3)
// passando os valores no "processamento"
//Elas pode ser compartilhados de forma global

//OO
//Exemplo 
//Tem um "DADOS" que armazena as "FUNCAO"
//Figuga central, que gera 'class' ou 'function'
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //...
    }
}

objeto.processamento()


//Principios Importantes do "OBJETO"
/*
1. Abstracao
    Interpreta as caracteristicas 
    Exemplo em programacao:
        Nao seria nessesario interpletar todas as caracteristicas
    de um determinado objeto, como:
                                    "Detran" Placa do carro
                                             Renavan
                                             etc;
    E sao caracteristicas especificas para o "Detran"

2. Encapsulamento
    Separar as caracteristicas (Tem um) 
        Exemplo em programacao:
            E separado as caracteristicas em etapas, como em um carro
        pode se dizer que um modelo de um carro de '1998' tem as mesmas caracteristicas
        interna semelhante que o modelo '2018, entao a pessoa que quer trocar o carro 
        para o mesmo modelo, so que o ano diferente, nao tera dificuldade de se adaptar 
        mas sentira a diferenca nas tecnologia, e nos componentes.
            Resumindo manter o mesmo objeto, mas sempre atualizar os componentes dela
        para mais melhorias
3. Heranca (ProtoType)
    Separado por (É um)
4. Polimorfismo
     Multiplas formas
        Exemplo:
            Um celular tem seu modelos (ex: Iphone, Galaxy, etc...)
            Um carro tem seus modelos (ex: Uno, Argo, etc...)
*/
