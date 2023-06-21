import React from "react"
import './App.css'

import Mega from "./componetes/mega/Mega.jsx"
import Contador from "./componetes/contador/Contador"
import Input from "./componetes/formulario/Input"
// Outra forma de import, copiando o caminha do arquivo
import IndiretaPai from "./componetes/comunicacao/IndiretaPai"
import DiretaPai from "./componetes/comunicacao/DiretaPai"
import UsuarioInfo from "./componetes/condicional/UsuarioInfo"
import ParOuImpar from "./componetes/condicional/ParOuImpar"
import TabelaProdutos from "./componetes/Repeticao/TabelaProdutos"
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
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega>qtde={6}</Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#454545">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - Comunicação Controlado(Input)" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar>numero={21}</ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{ email: 'Fer@nando.com' }} />
                <UsuarioInfo />
                {/* <UsuarioInfo usuario={{email: 'Fer@nando.com'}}/> */}
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#E19029">
                <TabelaProdutos></TabelaProdutos>
            </Card>

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


