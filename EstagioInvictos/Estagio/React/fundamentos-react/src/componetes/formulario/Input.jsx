import React, { useState } from "react";

import Input from './Input.css'

export default props => {
    const [valor, setValor] = useState('Inicial')
    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style ={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value = {valor} onChange ={quandoMudar}/> {/*Componete que ira ter alteração, com outros componentes */}
                <input value = {valor} readOnly/> {/* Compodente somente leitura*/}
                <input value = {undefined} /> {/*Componete que não irá afetar outros componetes */}
            </div>
        </div>
    )
}