import React, {useEffect, useRef, useState} from 'react';

const Ejemplo2 = () => {
    const [cont, setContador] = useState(0)
    const [cont1, setContador1] = useState(0)

    const miRef = useRef()

    const increment = () => {
        setContador(cont + 1)
    }
    const increment2 = () => {
        setContador1(cont1 + 1)
    }

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('mostrando refencia a elementos del DOM')
    //     console.log(miRef)
    // })

    //solo se actualizara al incrementar el contador 1 y si se actualiza el contador 2 no
    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('mostrando refencia a elementos del DOM')
    //     console.log(miRef)

    // },[cont])

    //si hay cambios en el contador 1 o 2 se va a actualizar
    useEffect(() => {
        console.log('cambio en el estado del componente')
        console.log('mostrando refencia a elementos del DOM')
        console.log(miRef)

    },[cont, cont1])

    return (
        <div>
            <h2>CONTADOR: {cont}</h2>
            <h2>CONTADOR 1: {cont1}</h2>
            {/* refenciar elementos */}
            <h4 ref={miRef}>
                Ejemplo de el elemento refenciado
            </h4>
            <button onClick={increment}>increment</button>
            <button onClick={increment2}>increment1</button>

        </div>
    );
}

export default Ejemplo2;
