import React from "react";

export default props =>{
    return (
        <div>
            <span>{props.nome}, </span>
            <span><strong>{props.idade}</strong> ano, </span>
            <span>ele e nerd: {props.nerd ? 'Verdadeiro' : 'Falso'}! </span>
        </div>
    )
}