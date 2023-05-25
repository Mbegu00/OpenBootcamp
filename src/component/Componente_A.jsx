import React, { Component } from 'react'
import Componente_B from './Componente_B'
import PropTypes from 'prop-types';

export class Componente_A extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: props.nombre,
            apellido: props.apellido,
            email: props.email,
            conectado: props.conectado
        };
    }
  render() {
    return (
        
      <div>
      <Componente_B conectado={this.state.conectado}/>
      </div>
    )
  }
}
Componente_A.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  conectado: PropTypes.bool.isRequired,
};

export default Componente_A