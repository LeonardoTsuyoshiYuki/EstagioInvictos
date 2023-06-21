import React, {useState} from "react";

import IndiretaFilho from './IndiretaFilho';

export default props => {
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    function fornecerInformacao(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>Nome do meu pai é {nome},</span>
                <span> idade <strong>  {idade}</strong>,</span>
                <span> é nerde: {nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacao}></IndiretaFilho>
        </div>
    )
}