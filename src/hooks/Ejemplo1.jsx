import React, {useState} from 'react';

const valorInicial = 0
const pers = {
    name:'adolfo',
    age:15
}
const Ejemplo1 = () => {
    const [count, setCount] = useState(valorInicial)
    const [persona, setPersona] = useState(pers)

    const increment = () =>{
        setCount(count + 1)
    }
    const actuazPersona = () =>{
        setPersona({
            name: 'pepe',
            age: 150
        })
    }
    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR {count}</h2>
            <h1>Datos de la persona</h1>
            <h2>Persona: {persona.name}</h2>
            <h2>Persona: {persona.age}</h2>
            <button onClick={increment}>Incrementar</button>
            <button onClick={actuazPersona}>Cambiar datos</button>
        </div>
    );
}

export default Ejemplo1;
