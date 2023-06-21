import React from "react"
import './App.css'

import ListaAluno from "./componetes/Repeticao/ListaAluno"
import Familia from "./componetes/basicos/Familia"
import FamiliaMembro from "./componetes/basicos/FamiliaMembro"
import Card from "./componetes/Layout/Card"
import Aleatorio from "./componetes/basicos/Aleatorio"
import Primeiro from "./componetes/basicos/Primeiro"
import ComParamentro from "./componetes/basicos/ComParamentro"
import Fragmento from "./componetes/basicos/Fragmento"

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com Paramentro" color="#E8B71A">
                <ComParamentro
                    titulo="Situação do aluno!"
                    aluno="Pedro Silva"
                    notas={6.3} />
            </Card>
            
            <Card titulo="#01 - Com Paramentro" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)


