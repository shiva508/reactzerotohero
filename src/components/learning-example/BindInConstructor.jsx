import React, { Component } from 'react'

export default class BindInConstructor extends Component {
constructor(){
    super();
    this.state={
        name:'Mouni'
    }
    this.clickHandler=this.clickHandler.bind(this)
}
clickHandler(){
    this.setState({
        name:'Jhon' 
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
