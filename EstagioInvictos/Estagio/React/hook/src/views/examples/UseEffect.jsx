import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//EX #01 
    function calcFatorial(num){
        const n = parseInt(num)
        if (n < 0) return -1
        if (n === 0) return 1
        return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

//EX #01    
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect( function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if (fatorial > 1000000){
            document.title = "Eita!!!"
        }else{
            document.title = "React App"
        }
    }, [fatorial])

//EX #02
    const [number2, setNumber2] = useState (0)
    const [stats, setStats] = useState("Ímper")
    

    useEffect(function(){
        setStats(number2 % 2 === 0 ? "Par" : "Ímper")
    }, [number2])

    return (//Corpo do componente funcional
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"/>

            <SectionTitle title = "Ecercício #01"/>
                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                    </div>
                    <input type="number" className="input" 
                        value={number}
                        onChange={e => setNumber(e.target.value)}/>    
                </div>

            <SectionTitle title="Ecercício #02"/>
                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{stats}</span>
                    </div>
                    <input type="number" className="input" 
                        value = {number2}
                        onChange = {e => setNumber2(e.target.value)}/>

                </div>

        </div>
    )
}

export default UseEffect
