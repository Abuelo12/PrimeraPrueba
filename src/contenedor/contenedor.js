import React, { Component } from 'react';

import Login from './../componentes/login';
import Inicio from './../componentes/inicio';

class Contenedor extends Component {

    constructor(props) {
        super(props);

        //inicializamos el estado
        this.state = {
            vista: 'login',
            valor:'',
        };
        this.mieventotexto = this.mieventotexto.bind(this)
    
    }

    cambiodepantalla = (pantalla) => {

        this.setState({
            vista: pantalla,
        });

    };

    mieventotexto =(data) =>
    {
        this.setState({
            valor:data,
        });
    }

    render() {

        const { vista, valor } = this.state;

        if(vista === 'login') {
            return (
                <login
                    cambiodepantalla={this.cambiodepantalla}
                    miOnChangeDeTexto={this.mieventotexto}
                    Texto={valor}
                />
            );
        }

        if(vista === 'inicio') {
            const{valor} = this.state
            return (
                <Inicio
                    cambiodepantalla={this.cambiodepantalla}
                    campoTexto={valor}
                />
            );
        }

    }

}

export default Contenedor;