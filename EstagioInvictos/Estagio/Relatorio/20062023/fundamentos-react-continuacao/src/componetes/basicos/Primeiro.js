//Aparentimento JSX, não precisa mais importa o react, para funcionar
//Porem sempre importa
import React from "react"

export default function Primeiro() {
    //!CUIDADO! Estar na frente do return "<div>"... ou deixar entro dos (), para criar um corpo.
    const msg = 'Seja bem vindo(a)!!!'
    return (
            <div>
                <h2>Primeiro componentes</h2>
                <p> { msg } </p>
            </div>
    )
}