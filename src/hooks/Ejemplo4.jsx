import React from 'react';

///entender como funciona los props.children

const Ejemplo4 = (props) => {
    return (
        <div>
        <h2>
            nombre: {props.nombre}
        </h2>
            
            {props.children}
        </div>
    );
}

export default Ejemplo4;
