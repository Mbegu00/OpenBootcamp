import React from 'react'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import Ejemplo3 from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'


function App() {
  return (
    <>
      <Ejemplo3/>
      <Ejemplo4 nombre="martin ">
        <h1>Esto es un children</h1>
      </Ejemplo4>
    </>
  )
}

export default App
