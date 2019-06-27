import React, { Component } from 'react'

class ClassClick extends Component {
clickClassHandler(){
    console.log("hi")
}
    render() {
        return (
            <div>
               <button onClick={()=>this.clickClassHandler()}>Click</button> 
            </div>
        )
    }
}

export default ClassClick
