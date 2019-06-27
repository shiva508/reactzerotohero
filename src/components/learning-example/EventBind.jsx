import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super();
        this.state={

            message:'Hi'
        }
    }

    clickHandler(){
        this.setState({
            message:'Bye'
        })
    }
    render() {
        return (
            <div>
               <h1>{this.state.message}</h1>
              <button onClick={this.clickHandler.bind(this)}> Click</button>  
            </div>
        )
    }
}
class S extends Component{
    render(){
        return <h1>HH</h1>
    }
}
export default EventBind

