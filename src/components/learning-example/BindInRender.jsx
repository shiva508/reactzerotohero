import React, { Component } from 'react'

export default class BindInRender extends Component {
constructor(){
    super();
    this.state={
        name:'Shiva'
                }
}
clickHandler(){
    this.setState({
        name:'Satish'
    })
}
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.clickHandler.bind(this)}>Change</button>
            </div>
        )
    }
}
