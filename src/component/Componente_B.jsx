import React from 'react';

const ComponenteB = ({conectado}) => {
    return conectado
        ? <h1>Contacto en linea</h1>
        : <h1>Contacto no Disponible</h1>
}

export default ComponenteB;
