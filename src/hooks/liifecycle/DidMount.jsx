import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('didMount: Comportamiento antes que sea a;adidod al DOM')
    }


  render() {
    return (
      <div>DidMount</div>
    )
  }
}


const DidMountHook = () => {
    //se ejecutaria todas la veces posibles si pones los corchetes
    useEffect(() => {
        console.log('didMount: Comportamiento antes que sea a;adidod al DOM')
    },[])

    return (
        <div>
            DidMount
        </div>
    );
}

export default DidMountHook;
