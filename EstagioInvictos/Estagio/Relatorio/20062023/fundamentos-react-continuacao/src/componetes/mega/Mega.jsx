import React, { useState } from "react";
import "./Mega.css"

export default props => {

    function gerarNumerosNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ?
            gerarNumerosNaoContido(min, max, array) :
                aleatorio
    }
    function gerarNumeros(qntd) {
        const numeros = Array(qntd)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])

            .sort((n1, n2) => n1 - n2)
        return numeros
    }

    
    const [qtde, setQtde] = useState(props.qntd || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais) 
    return (
        <div className = "Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade de Números</label>
                <input 
                    min="6"
                    max="15"
                    type="number" 
                    value= {qtde}
                    onChange={elemento => {
                        setQtde(+elemento.target.value)
                        setNumeros(gerarNumeros(+elemento.target.value))
                    }}/>
             
            </div>
            <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
                Gerar Númeoros
            </button>
        </div>
    )
}