import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(){
        super();
        this.state={
            name:'Parent'
        }
this.greateParent=this.greateParent.bind(this)
    }
greateParent(childName){
    alert(`Hello ${this.state.name} from ${childName}`)
}
    
    render() {
        return (
            <div>
                <ChildComponent clickHandler={this.greateParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
