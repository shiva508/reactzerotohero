import React, { Component } from 'react'

export default class BindInClassProp extends Component {

    constructor(){
        super();
        this.state={
            name:'Raji'
        }
    }
    clickHandler=()=>{
        this.setState({
            name:'Gopi'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.clickHandler}>Change</button> 
            </div>
        )
    }
}
