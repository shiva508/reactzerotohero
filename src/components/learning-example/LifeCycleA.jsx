import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'shiva'
        }
        console.log("A Life cycle Constructor")
    }
   
    static  getDerivedStateFromProps(props,state){
        console.log(" A getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("A componentDidMount")
    }
    render() {
        console.log("A Render")
        return (
            <div>
                Life
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
