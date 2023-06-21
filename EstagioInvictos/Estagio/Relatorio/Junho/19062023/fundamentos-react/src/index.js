//Importando de arquivos
import './index.css'

//Importando de Modulo
import ReactDom from 'react-dom'
import React from 'react'

//Importando compornentes
import App from './App'

//corpo do JS
// ReactDom.render('Olá React!!!', elemento)
// const tag = <strong>Olá React!!!!</strong>

ReactDom.render(
    <App />,
    document.getElementById('root')
)
