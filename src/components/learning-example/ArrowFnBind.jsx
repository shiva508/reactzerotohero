import React, { Component } from 'react'

export default class ArrowFnBind extends Component {

    constructor(){
        super();
        this.state={

            name:'Ravi'
        }
    }
    clickHandler(){
        this.setState({
            name:'Kavya'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.clickHandler()}>Change</button>
            </div>
        )
    }
}
