import './Contador.css'
import Display from './Display';
import Botoes from './Botoes';
import PassosForm from './PassosForm';

import React, { Component } from "react";

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicil || 5,
    }

    inclemento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    declemento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassosForm 
                    passo = 
                        {this.state.passo}
                    setPasso = 
                        {this.setPasso}/>
                <Botoes
                    setInclemento=
                        {this.inclemento}
                    setDeclemento=
                        {this.declemento}
                />
            </div>
        )
    }
}


export default Contador


