import React,{useState, useContext} from 'react';


//componente 1
//dispone de un contexto que va a tener un valor
//que reciibe desde el padre
const miContexto = React.createContext(null)
const Componente1 = () => {
    //inicializamos un estad vacio que va a rellenarse con los
    //datos del padre
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2/>
            
        </div>
    );
}
const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                la sesion es : {state.sesion}
            </h2>
        </div>
    );
}


const Componente3 = () => {
    const estadoInicial = {
        token: '123455',
        sesion: 1
    }

    //creamos el estado de este componenete
    const [sessionData, setSessionData] = useState(estadoInicial)

    //actualizar session
    const actualizarSession = () =>{
        setSessionData(
            {
                token: 'dfgdfg',
                sesion: sessionData.sesion + 1,
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* todos pueden leer y actualizar los datos
        si se actualzia los componente aqui tambien se actualiza */}
            <Componente1/>
            <button onClick={actualizarSession}>Actualizar session</button>

        </miContexto.Provider>
    );
}

export default Componente3;
