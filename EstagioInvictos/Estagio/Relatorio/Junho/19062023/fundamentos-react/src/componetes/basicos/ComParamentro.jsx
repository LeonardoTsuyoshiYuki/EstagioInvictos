import React from "react"
export default function ComParamentro(props) {
    // Pode ser criado tando dentro da propriedade ou criando uma contante
    const aluno = props.aluno
    const nota = props.notas
    const status = props.notas >= 7 ? 'Aprovado' : 'de Recuperação'
    //Não é possivel fazer alterações, nas propriedades, por ele ser somente leitura
    //Porem, tem como quebrar o valor e deixar em formato de numeros inteiro, mas não ele não é lido antes de fazer a condição
    //const notasInt = Math.ceil(props.notas)

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{aluno} </strong>
                tem nota
                <strong> {nota} </strong>
                e está
                <strong> {status}</strong>
            </p>
        </div>
    )
}