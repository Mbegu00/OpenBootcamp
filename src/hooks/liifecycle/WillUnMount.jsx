import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('WillUnMount: Componenete antes que se desaparezca')
    }

    render() {
        return (
            <div>
                componentWillUnmount
            </div>
        );
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no ponemos nada
        return ()=>{
            console.log(' Componenete antes que se desaparezca')
        }
    },[])


    return (
        <div>
            componentWillUnmount
        </div>
    );
}


