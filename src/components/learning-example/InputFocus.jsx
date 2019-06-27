import React, { Component } from 'react'
import Input from './Input';

export class InputFocus extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.inputFocuse()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef}></Input>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default InputFocus
