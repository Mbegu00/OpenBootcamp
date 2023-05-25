import React,{useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {


        const interval = setInterval(() =>{
            console.log('Atualizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            clearInterval(interval)
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
