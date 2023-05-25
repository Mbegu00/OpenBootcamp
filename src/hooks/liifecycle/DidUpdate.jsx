import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('didUpdate: cuando el componente recibe nuevos props o cambios en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    //Se ejeutaria solo una vez
    useEffect(() => {
        console.log(' cuando el componente recibe nuevos props o cambios en su estado privado')
    })


    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}




